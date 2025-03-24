"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, PerspectiveCamera, Text } from "@react-three/drei"
import * as THREE from "three"

function NotesGenerator() {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <Environment preset="city" />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <MainNote />
    </Canvas>
  )
}

function MainNote() {
  const mainNoteRef = useRef()
  const [notes, setNotes] = useState([])
  const [nextNoteTime, setNextNoteTime] = useState(0)

  // Create a main note geometry
  const noteGeometry = new THREE.BoxGeometry(3, 0.1, 4)

  // Create materials
  const noteMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#fde047"),
    roughness: 0.5,
    metalness: 0.1,
  })

  // Generate a new note
  const generateNote = () => {
    // Random position offset from the main note
    const x = (Math.random() - 0.5) * 0.5
    const y = 0.1
    const z = (Math.random() - 0.5) * 0.5

    // Random size (smaller than main note)
    const width = 0.8 + Math.random() * 0.6
    const height = 1 + Math.random() * 0.5

    // Random rotation
    const rotationX = Math.random() * 0.2 - 0.1
    const rotationY = Math.random() * 0.2 - 0.1
    const rotationZ = Math.random() * 0.2 - 0.1

    // Random color (variations of yellow and white)
    const colors = ["#fde047", "#fef9c3", "#ffffff", "#fef08a"]
    const color = colors[Math.floor(Math.random() * colors.length)]

    // Random text content
    const texts = [
      "Meeting notes",
      "To-do list",
      "Ideas",
      "Project plan",
      "Shopping list",
      "Reminders",
      "Goals",
      "Thoughts",
    ]
    const text = texts[Math.floor(Math.random() * texts.length)]

    return {
      id: Date.now(),
      position: [x, y, z],
      size: [width, 0.05, height],
      rotation: [rotationX, rotationY, rotationZ],
      color,
      text,
      age: 0,
      velocity: [0, 0.02 + Math.random() * 0.02, 0],
      angularVelocity: [(Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02],
    }
  }

  // Animation
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime()

    // Animate main note
    if (mainNoteRef.current) {
      mainNoteRef.current.rotation.y = Math.sin(time * 0.3) * 0.2
      mainNoteRef.current.rotation.x = Math.sin(time * 0.2) * 0.1
    }

    // Generate new notes periodically
    if (time > nextNoteTime) {
      setNotes((prevNotes) => [...prevNotes, generateNote()])
      setNextNoteTime(time + 1 + Math.random()) // Random interval between 1-2 seconds
    }

    // Update existing notes
    setNotes(
      (prevNotes) =>
        prevNotes
          .map((note) => {
            // Update position based on velocity
            const newPosition = [
              note.position[0] + note.velocity[0],
              note.position[1] + note.velocity[1],
              note.position[2] + note.velocity[2],
            ]

            // Update rotation based on angular velocity
            const newRotation = [
              note.rotation[0] + note.angularVelocity[0],
              note.rotation[1] + note.angularVelocity[1],
              note.rotation[2] + note.angularVelocity[2],
            ]

            // Increase age
            const newAge = note.age + delta

            return {
              ...note,
              position: newPosition,
              rotation: newRotation,
              age: newAge,
            }
          })
          .filter((note) => note.position[1] < 5 && note.age < 10), // Remove notes that are too high or too old
    )
  })

  return (
    <group>
      {/* Main note */}
      <mesh
        ref={mainNoteRef}
        geometry={noteGeometry}
        material={noteMaterial}
        castShadow
        receiveShadow
        position={[0, 0, 0]}
      >
        {/* Lines on the note */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={i} position={[0, 0.06, -1.5 + i * 0.4]} castShadow>
            <planeGeometry args={[2.8, 0.01]} />
            <meshStandardMaterial color="#00000030" side={THREE.DoubleSide} />
          </mesh>
        ))}

        {/* Title area */}
        <Text
          position={[0, 0.06, -1.7]}
          fontSize={0.2}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.ttf"
        >
          NoteWave
        </Text>
      </mesh>

      {/* Generated notes */}
      {notes.map((note) => (
        <group
          key={note.id}
          position={[note.position[0], note.position[1], note.position[2]]}
          rotation={[note.rotation[0], note.rotation[1], note.rotation[2]]}
        >
          <mesh castShadow>
            <boxGeometry args={note.size} />
            <meshStandardMaterial color={note.color} />
          </mesh>

          <Text
            position={[0, note.size[1] + 0.01, 0]}
            fontSize={0.15}
            color="#000000"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Inter-Regular.ttf"
            maxWidth={note.size[2] * 0.8}
          >
            {note.text}
          </Text>
        </group>
      ))}
    </group>
  )
}

export { NotesGenerator }

