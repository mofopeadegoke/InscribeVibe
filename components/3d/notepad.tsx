"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

function Notepad() {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <Environment preset="city" />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <RotatingNotepad />
    </Canvas>
  )
}

function RotatingNotepad() {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  // Create a simple notepad geometry
  const notepadGeometry = new THREE.BoxGeometry(3, 0.2, 4)
  const pageGeometry = new THREE.PlaneGeometry(2.8, 3.8)

  // Create materials
  const coverMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#fde047"),
    roughness: 0.5,
    metalness: 0.1,
  })

  const pageMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#ffffff"),
    roughness: 0.7,
    metalness: 0,
  })

  // Animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.5
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2

      if (hovered) {
        meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, -0.2, 0.1)
      } else {
        meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, 0, 0.1)
      }
    }
  })

  return (
    <group
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={[0, 0, 0]}
    >
      {/* Notepad cover */}
      <mesh geometry={notepadGeometry} material={coverMaterial} castShadow receiveShadow>
        <meshStandardMaterial color="#fde047" />
      </mesh>

      {/* Pages */}
      <mesh geometry={pageGeometry} material={pageMaterial} position={[0, 0.11, 0]} castShadow receiveShadow />

      {/* Spiral binding */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} position={[-1.4, 0.15, -1.8 + i * 0.4]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.3, 16]} />
          <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  )
}

export { Notepad }

