"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import * as THREE from "three"

function PaperPlaneAnimation() {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <Environment preset="city" />
      <PaperPlane />
    </Canvas>
  )
}

function PaperPlane() {
  const planeRef = useRef()

  // Create a paper plane shape
  const shape = new THREE.Shape()
  shape.moveTo(0, 0)
  shape.lineTo(1, 0)
  shape.lineTo(0.5, 1)
  shape.lineTo(0, 0)

  const extrudeSettings = {
    steps: 1,
    depth: 0.05,
    bevelEnabled: false,
  }

  // Animation
  useFrame((state) => {
    if (planeRef.current) {
      // Fly in a figure-8 pattern
      const t = state.clock.getElapsedTime() * 0.5
      planeRef.current.position.x = Math.sin(t) * 2
      planeRef.current.position.y = Math.sin(t * 2) * 0.5
      planeRef.current.position.z = Math.cos(t) * 2

      // Rotate to face direction of travel
      planeRef.current.rotation.z = Math.sin(t) * 0.2
      planeRef.current.rotation.x = Math.cos(t * 2) * 0.1
      planeRef.current.rotation.y = Math.sin(t) * Math.PI
    }
  })

  return (
    <group ref={planeRef} scale={[1.5, 1.5, 1.5]}>
      <mesh castShadow>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshStandardMaterial color="#fde047" side={THREE.DoubleSide} />
      </mesh>

      {/* Fold line */}
      <mesh position={[0.5, 0.5, 0.051]}>
        <planeGeometry args={[0.01, 1]} />
        <meshStandardMaterial color="#000000" opacity={0.2} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

export { PaperPlaneAnimation }

