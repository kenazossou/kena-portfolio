/**
 * CANVAS ROOT COMPONENT
 *
 * Wrapper for the Three.js Canvas using React Three Fiber.
 *
 * Responsibilities:
 * - Initialize the 3D rendering context
 * - Configure camera position, field of view, and settings
 * - Set default renderer properties (size, pixel ratio, etc.)
 * - Extend Three.js objects for declarative use
 *
 * Camera Configuration:
 * - Position: [0, 2, 5] - Positioned above origin, looking at scene center
 * - FOV: 60 - Field of view (60 degrees is comfortable for 3D)
 *
 * This component wraps the SceneManager and all 3D scene content.
 * It ensures a consistent canvas setup across all scenes.
 *
 * To adjust rendering quality or performance:
 * - Add dpr?: number (device pixel ratio, default: window.devicePixelRatio)
 * - Add frameloop?: 'always' | 'demand' (rendering strategy)
 *
 * Example:
 * <Canvas
 *   camera={{ position: [0, 2, 5], fov: 60 }}
 *   dpr={[1, 1.5]}
 *   frameloop="demand"
 * >
 */

'use client'

import { Canvas, extend } from '@react-three/fiber'
import * as THREE from 'three'

// Extend Three.js objects for declarative use in R3F
// This fixes "X is not part of the THREE namespace" errors
extend(THREE)

interface CanvasRootProps {
  children: React.ReactNode
}

export default function CanvasRoot({ children }: CanvasRootProps) {
  return (
    <Canvas
      // Camera configuration
      camera={{
        position: [0, 2, 5],
        fov: 60
      }}
      // Performance optimization: render only when scene changes
      // Comment out for continuous rendering (e.g., animations)
      // frameloop="demand"
    >
      {/* All 3D content (scenes, meshes, lights) renders here */}
      {children}
    </Canvas>
  )
}