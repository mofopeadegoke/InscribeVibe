"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import * as THREE from "three"

function FloatingNotes() {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <Environment preset="city" />
      <Notes />
    </Canvas>
  )
}

function Notes() {
  const groupRef = useRef()

  // Create a simple note geometry
  const noteGeometry = new THREE.PlaneGeometry(1, 1.3)

  // Create materials with different colors
  const noteMaterials = [
    new THREE.MeshStandardMaterial({ color: new THREE.Color("#fde047"), roughness: 0.5, side: THREE.DoubleSide }),
    new THREE.MeshStandardMaterial({ color: new THREE.Color("#ffffff"), roughness: 0.7, side: THREE.DoubleSide }),
    new THREE.MeshStandardMaterial({ color: new THREE.Color("#fef9c3"), roughness: 0.6, side: THREE.DoubleSide }),
  ]

  // Create note positions
  const notePositions = [
    [-1.5, 0, 0],
    [0, 0.5, 1],
    [1.5, -0.5, 0.5],
    [-0.8, -1, -0.5],
    [0.8, 1, -1],
    [-2, 1, -1.5],
    [2, -1, -2],
  ]

  // Animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.3

      // Animate each note
      groupRef.current.children.forEach((note, i) => {
        note.position.y += Math.sin(state.clock.getElapsedTime() * 0.5 + i) * 0.003
        note.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3 + i * 0.5) * 0.1
      })
    }
  })

  return (
    <group ref={groupRef}>
      {notePositions.map((position, i) => (
        <mesh
          key={i}
          geometry={noteGeometry}
          material={noteMaterials[i % noteMaterials.length]}
          position={position}
          rotation={[Math.random() * 0.2, Math.random() * 0.2, Math.random() * 0.2]}
          castShadow
        />
      ))}
    </group>
  )
}

export { FloatingNotes }

