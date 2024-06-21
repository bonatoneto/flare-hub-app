import { ReactNode } from "react"

export const MainContainer = ({ children}: {children: ReactNode}) => {
  return <main className="flex justify-center mt-20 bg-neutral-900">
    {children}
  </main>
}