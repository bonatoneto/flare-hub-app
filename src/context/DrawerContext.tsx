'use client'
import { ReactNode, useState } from "react"
import { createContext } from "react"

type DrawerProps = {
  handleOpenDrawer: () => void
  handleCloseDrawer: () => void
  isOpenDrawer: boolean
}

export const DrawerContext = createContext<DrawerProps>({} as DrawerProps)

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  function handleOpenDrawer() {
    return setIsOpenDrawer(true)
  }

  function handleCloseDrawer() {
    return setIsOpenDrawer(false)
  }

  return (
    <DrawerContext.Provider value={{ handleOpenDrawer, handleCloseDrawer, isOpenDrawer }}>
      {children}
    </DrawerContext.Provider>
  )
}