'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import HeaderMobileMenu from "../HeaderMobileMenu";
import { Button } from "components/Button";
import { useDrawer } from "hooks/useDrawer";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    };

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, []);
 
  return isMobile ? <MobileHeader /> : <DesktopHeader />
}

  const DesktopHeader = () => {
    const { handleOpenDrawer } = useDrawer()
    return (
      <header className="flex items-center justify-center h-20 bg-neutral-800">
        <div className="flex items-center w-full max-w-7xl mr-6 ml-6 gap-16">
          <Image 
            src="/img/flare-hub-logo.png" 
            alt="logo-flare-hub" 
            width={240} 
            height={24} 
            quality={100}
            priority={true} 
          />
          <nav className="flex justify-between items-center w-full">
            <ul className="flex gap-6 font-medium text-white">
              <li>
                <a href="/" className="hover:text-neutral-400 transition-all">Home</a>
              </li>
              <li>
                <a href="/league-of-legends/times" className="hover:text-neutral-400 transition-all">LOL</a>
              </li>
              <li>
                <a href="/counter-strike-2/times" className="hover:text-neutral-400 transition-all">CS2</a>
              </li>
              <li>
                <a href="/valorant/times" className="hover:text-neutral-400 transition-all">VALORANT</a>
              </li>
              <li>
                <a href="/rainbow-six-siege/times" className="hover:text-neutral-400 transition-all">R6</a>
              </li>
            </ul>
            <div className="max-w-24">
              <Button text="Entrar" onClick={handleOpenDrawer} />
            </div>
          </nav>
        </div>
      </header>
    )
  }
  
  const MobileHeader = () => {
    return (
      <header className="flex items-center justify-center h-20 bg-neutral-800">
        <div className="flex items-center justify-between w-full max-w-7xl mr-6 ml-6 gap-16">
          <Image 
            src="/img/flare-hub-logo.png" 
            alt="logo-flare-hub" 
            width={240} 
            height={24} 
            quality={100}
            priority={true} 
          />
          <div>
            <Image
              src="/icons/menu-icon.png"
              alt="menu-icon"
              width={24}
              height={24}
            />
          </div>
        </div>
        {/* <HeaderMobileMenu /> */}
      </header>
    )
  }