import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-center w-screen h-20 bg-neutral-800">
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
              <a href="#" className="hover:text-neutral-400 transition-all">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-400 transition-all">LOL</a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-400 transition-all">CS2</a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-400 transition-all">Valorant</a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-400 transition-all">R6</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}