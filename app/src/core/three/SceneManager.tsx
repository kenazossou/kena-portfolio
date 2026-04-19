/**
 * SCENE MANAGER COMPONENT
 * 
 * Central router for all scenes in the portfolio.
 * 
 * Responsibilities:
 * - Switch between scenes based on store state
 * - Load appropriate 3D scene components
 * - Handle scene transitions and cleanup
 * 
 * Supported scenes:
 * - home: Interactive 3D home experience
 * - gallery: Portfolio gallery view
 * - experience-detail: Individual experience detail view
 * - about: About/resume section
 * 
 * Adding new scenes:
 * 1. Create new scene component in src/experience/scenes/
 * 2. Import it here
 * 3. Add case to switch statement
 * 4. Update SceneType in types/experience.ts
 */

'use client'

import { useStore } from '@/store/useStore'
import HomeScene from '@/experience/scenes/HomeScene'
import GalleryScene from '@/experience/scenes/GalleryScene'

export default function SceneManager() {
  const scene = useStore((s) => s.scene)

  /**
   * Route to appropriate scene component based on current scene state
   * Default falls back to home
   */
  switch (scene) {
    case 'home':
      return <HomeScene />

    case 'gallery':
      return <GalleryScene />

    case 'experience-detail':
      // Experience detail scene would go here
      // For now, fall back to gallery
      return <GalleryScene />

    case 'about':
      // About/resume scene would go here
      // For now, fall back to gallery
      return <GalleryScene />

    default:
      return <HomeScene />
  }
}