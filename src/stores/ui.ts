import { create } from "zustand"

import type { Mode } from "../lib/modes"

interface UIStore {
  activeMode: Mode
  setActiveMode: (mode: Mode) => void

  // The index of the active section. -1 represents the mode selection view.
  activeSectionIndex: number
  setActiveSectionIndex: (index: number) => void

  // Add these two lines
  isTextInputActive: boolean
  setIsTextInputActive: (isActive: boolean) => void
}

export const useUIStore = create<UIStore>()((set) => ({
  activeMode: "code",
  setActiveMode: (mode) => set({ activeMode: mode, activeSectionIndex: -1 }),

  activeSectionIndex: -1, // Start with mode selection focused
  setActiveSectionIndex: (index) => set({ activeSectionIndex: index }),

  // And add these two lines
  isTextInputActive: false,
  setIsTextInputActive: (isActive) => set({ isTextInputActive: isActive }),
}))
