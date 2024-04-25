'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

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
          <nav className="">
            <ul className="flex gap-6 font-medium text-white">
              <li>
                <a href="/" className="hover:text-neutral-400 transition-all">Home</a>
              </li>
              <li>
                <a href="/league-of-legends" className="hover:text-neutral-400 transition-all">LOL</a>
              </li>
              <li>
                <a href="/counter-strike-2" className="hover:text-neutral-400 transition-all">CS2</a>
              </li>
              <li>
                <a href="/valorant" className="hover:text-neutral-400 transition-all">Valorant</a>
              </li>
              <li>
                <a href="/raimbow-six-siege" className="hover:text-neutral-400 transition-all">R6</a>
              </li>
            </ul>
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