'use client'

import { useStore } from '@/store/useStore'
import HomeScene from '@/experience/scenes/HomeScene'

export default function SceneManager() {
  const scene = useStore((s) => s.scene)

  switch (scene) {
    case 'home':
      return <HomeScene />
    default:
      return <HomeScene />
  }
}