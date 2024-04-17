import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center w-screen bg-neutral-800">
      <div className="sm:flex justify-between w-full max-w-7xl pt-12 pb-12 gap-6 mr-6 ml-6 sm:gap-6">
        <div className="flex flex-col gap-6">
          <p className="text-white font-medium">Equipes</p>
          <ul className="flex flex-col gap-2 text-white">
            <li>
              <a href="/" className="hover:text-neutral-400 transition-all">League of Legends</a>
            </li>
            <li>
              <a href="/" className="hover:text-neutral-400 transition-all">Counter Strike 2</a>
            </li>
            <li>
              <a href="/" className="hover:text-neutral-400 transition-all">Valorant</a>
            </li>
            <li>
              <a href="/" className="hover:text-neutral-400 transition-all">Rainbow Six Siege</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-white font-medium">Missão</p>
          <ul className="flex flex-col gap-2 text-white">
            <li>
              <a href="/" className="hover:text-neutral-400 transition-all">O que fazemos</a>
            </li>
            <li>
              <a href="/" className="hover:text-neutral-400 transition-all">Objetivo</a>
            </li>
            <li>
              <a href="/" className="hover:text-neutral-400 transition-all">História</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-white font-medium">Sobre nós</p>
          <ul className="flex flex-col gap-2 text-white">
            <li>
              <a href="/" className="hover:text-neutral-400 transition-all">Quem somos</a>
            </li>
            <li>
              <a href="/" className="hover:text-neutral-400 transition-all">Canal de dúvidas</a>
            </li>
            <li>
              <a href="/" className="hover:text-neutral-400 transition-all">Fale conosco</a>
            </li>
            <li>
              <a href="/" className="hover:text-neutral-400 transition-all">Políticas de privacidade</a>
            </li>
          </ul>
        </div>
        <div className="h-6">
          <Image
            src="/img/flare-hub-logo.png"
            alt="logo-flare-hub"
            width={240}
            height={10}
            quality={100}
            priority={true}          
          />
        </div>
      </div>
    </footer>
  )
}