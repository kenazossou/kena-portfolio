'use client'

import { OrbitControls } from '@react-three/drei'
import { useStore } from '@/store/useStore'

export default function HomeScene() {
  const setScene = useStore((s) => s.setScene)

  return (
    <>
      <ambientLight />
      <OrbitControls />

      <mesh onClick={() => setScene('projects')}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  )
}