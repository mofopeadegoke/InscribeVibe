"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Text } from "@react-three/drei"
import * as THREE from "three"

function NotesAnimation() {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <Environment preset="city" />
      <FallingNotes />
    </Canvas>
  )
}

function FallingNotes() {
  const groupRef = useRef()

  // Create notes with different content
  const notes = [
    { text: "Welcome", position: [0, 3, 0], speed: 0.02, rotation: [0.1, 0.2, 0.1] },
    { text: "to", position: [-1.5, 4, -1], speed: 0.015, rotation: [0.2, 0.1, -0.1] },
    { text: "NoteWave", position: [1.5, 5, 1], speed: 0.025, rotation: [-0.1, 0.3, 0.2] },
    { text: "Sign Up", position: [-2, 6, 0], speed: 0.018, rotation: [0.3, -0.2, 0.1] },
    { text: "Today", position: [2, 7, -1], speed: 0.022, rotation: [-0.2, 0.1, 0.3] },
  ]

  // Animation
  useFrame((state) => {
    if (groupRef.current) {
      // Animate each note
      groupRef.current.children.forEach((note, i) => {
        // Move down
        note.position.y -= notes[i].speed

        // Reset position when out of view
        if (note.position.y < -3) {
          note.position.y = 7
        }

        // Gentle rotation
        note.rotation.x += 0.001
        note.rotation.y += 0.002
        note.rotation.z += 0.001
      })
    }
  })

  return (
    <group ref={groupRef}>
      {notes.map((note, i) => (
        <group key={i} position={note.position} rotation={note.rotation}>
          {/* Note background */}
          <mesh castShadow>
            <planeGeometry args={[2, 1.5]} />
            <meshStandardMaterial color="#fde047" side={THREE.DoubleSide} />
          </mesh>

          {/* Note text */}
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.3}
            color="#000000"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Inter-Bold.ttf"
          >
            {note.text}
          </Text>
        </group>
      ))}
    </group>
  )
}

export { NotesAnimation }

