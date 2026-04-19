/**
 * PORTFOLIO STATE MANAGEMENT (ZUSTAND)
 * 
 * Centralized state management for the portfolio application.
 * 
 * State includes:
 * - Current scene being displayed
 * - Currently selected experience (for detail view)
 * - UI state (overlays, modals, etc.)
 * 
 * This store makes it easy to:
 * - Navigate between scenes
 * - Share state across components
 * - Track user interactions
 * - Extend functionality without prop drilling
 * 
 * Usage:
 * const { scene, setScene } = useStore()
 */

'use client'

import { create } from 'zustand'
import type { SceneType } from '@/types/experience'

/**
 * Portfolio application state
 */
type State = {
  // Current scene being displayed
  scene: SceneType

  // ID of currently selected experience (for detail view)
  selectedExperienceId: string | null

  // Mobile menu open/close state
  isMobileMenuOpen: boolean

  // Actions
  setScene: (scene: SceneType) => void
  setSelectedExperience: (id: string | null) => void
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
}

/**
 * Global Zustand store for portfolio state
 */
export const useStore = create<State>((set) => ({
  // Initial state
  scene: 'home',
  selectedExperienceId: null,
  isMobileMenuOpen: false,

  // State setters
  setScene: (scene) => set({ scene }),
  setSelectedExperience: (id) => set({ selectedExperienceId: id }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}))