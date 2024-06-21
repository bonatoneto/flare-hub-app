'use client'

import { useContext } from 'react'

import { DrawerContext } from 'context/DrawerContext'

export function useDrawer() {
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerContext')
  }
  return context
}
