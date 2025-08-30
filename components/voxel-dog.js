import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { RubiksCube } from './RubiksCube'
import * as THREE from 'three'

const VoxelDog = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true, outputColorSpace: THREE.SRGBColorSpace }}
      camera={{ position: [0, 0, 4], fov: 55 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.8} position={[2, 2, 2]} />

      {/* Cube spins automatically on Y only */}
      <RubiksCube />

      {/* OrbitControls allows mouse drag for vertical tilt */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={1.0}
      />
    </Canvas>
  )
}

export default VoxelDog
