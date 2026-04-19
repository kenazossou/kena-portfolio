'use client'

import { create } from 'zustand'

type State = {
  scene: string
  setScene: (scene: string) => void
}

export const useStore = create<State>((set) => ({
  scene: 'home',
  setScene: (scene) => set({ scene }),
}))