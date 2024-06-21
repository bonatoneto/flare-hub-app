'use client'

import { FormLogin } from "components/FormLogin"
import { useDrawer } from "hooks/useDrawer"


export const Drawer = () => {
  const { isOpenDrawer, handleCloseDrawer } = useDrawer()
  return (
    <>
      {isOpenDrawer && (
        <>
          <div
            className={`fixed top-0 bottom-0 h-screen w-full z-[200] bg-neutral-950 opacity-75`}
            onClick={handleCloseDrawer}
          ></div>
          <div className="fixed top-0 bottom-0 right-0 h-screen w-full max-w-[720px] bg-neutral-800 z-[300] opacity-100">
            <FormLogin />
          </div>
        </>
      )}
    </>
  )
}
