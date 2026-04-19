/**
 * HOME PAGE COMPONENT
 * 
 * Entry point for the portfolio application.
 * 
 * Structure:
 * - CanvasRoot: Sets up the Three.js Canvas and camera
 * - SceneManager: Routes between different 3D scenes
 * 
 * The page is marked with 'use client' in its children components
 * for interactive client-side functionality.
 */

import CanvasRoot from '@/core/three/CanvasRoot'
import SceneManager from '@/core/three/SceneManager'
import HomeOverlay from '@/components/experience/HomeOverlay'

export default function Home() {
  return (
    <>
      <CanvasRoot>
        <SceneManager />
      </CanvasRoot>
      <HomeOverlay />
    </>
  )
}
