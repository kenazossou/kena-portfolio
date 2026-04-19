'use client'

import { Canvas } from '@react-three/fiber'

export default function CanvasRoot({ children }: { children: React.ReactNode }) {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
      {children}
    </Canvas>
  )
}