/**
 * HOME SCENE COMPONENT
 * 
 * The main interactive 3D entry point for the portfolio.
 * 
 * Structure:
 * - 3D Canvas with Three.js rendering
 * - OrbitControls for camera interaction
 * - Interactive 3D elements (currently a simple cube)
 * - HTML overlay UI (HomeOverlay)
 * 
 * Future enhancements:
 * - Replace simple cube with custom 3D models
 * - Add particle effects and animations
 * - Create clickable 3D UI elements
 * - Add more interactive objects representing different project types
 * - Implement smooth camera animations between elements
 * 
 * The scene demonstrates:
 * - React Three Fiber integration
 * - Zustand state management
 * - Three.js interactivity
 * - UI/3D content layering
 */

'use client'

import { OrbitControls } from '@react-three/drei'
import { useStore } from '@/store/useStore'
import HomeOverlay from '@/components/experience/HomeOverlay'

export default function HomeScene() {
  const setScene = useStore((s) => s.setScene)

  return (
    <>
      {/* 3D Canvas content */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Orbit controls allow mouse interaction with the 3D scene */}
      <OrbitControls makeDefault />

      {/* 
        Main interactive element - a clickable cube
        Future: Replace with custom 3D models, loaded from Blender/other tools
      */}
      <mesh onClick={() => setScene('gallery')} position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial
          color="#3b82f6"
          emissive="#1e40af"
          shininess={100}
        />
      </mesh>

      {/* 
        You can add more 3D objects here:
        - Additional meshes with different geometries
        - Imported 3D models (using useGLTF)
        - Particle systems
        - Custom shaders for effects
      */}
    </>
  )
}