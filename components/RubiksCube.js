import { useGLTF } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

export function RubiksCube(props) {
  const { scene } = useGLTF('/models/rubiks_cube.glb')
  const ref = useRef()
  const [speed, setSpeed] = useState(0.15) // fast spin at start

  // Gradually slow down rotation speed
  useEffect(() => {
    let decay = setInterval(() => {
      setSpeed((s) => {
        if (s > 0.01) return s * 0.92 // decay rate
        clearInterval(decay)
        return 0.01 // final slow speed
      })
    }, 100)
    return () => clearInterval(decay)
  }, [])

  // Animate horizontal spin only
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += speed
    }
  })

  return <primitive ref={ref} object={scene} scale={15} {...props} />
}

useGLTF.preload('/models/rubiks_cube.glb')
