import Image from "next/image"
import playerRobo from "../../../../../../public/img/teams-lol/loud/robo.png"

export default function Player() {
  return (
    <main className="flex justify-center bg-neutral-900">
    <div className="flex w-full max-w-7xl mt-32 mb-32 mr-6 ml-6 gap-6">
      <div>
        <Image 
          src={playerRobo} 
          alt="jogador-robo" 
          height={1200}  
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-between gap-6">
        <div className="w-full max-w-3xl flex flex-col gap-10">
          <h1 className="text-5xl text-white font-bold">
            Leonardo <span className="italic font-extrabold">“Robo”</span> Souza
          </h1>
          <p className="text-white text-3xl">
            Robo é o top laner da LOUD desde 2021, com passagens vitoriosas por Keyd, RED Canids, CNB, Flamengo e paiN. Hoje com 7 títulos é o maior campeão da história do CBLOL.
          </p>
        </div>
        <ul className="w-full flex flex-wrap gap-5">
          <li>
            <Image 
              src={'/img/equips/mouse.png'} 
              alt="mouse" 
              width={400} 
              height={156} 
              quality={100} 
            />
          </li>
          <li>
            <Image 
              src={'/img/equips/headset.png'} 
              alt="headset" 
              width={400} 
              height={156} 
              quality={100} 
            />
          </li>
          <li>
            <Image 
              src={'/img/equips/mousepad.png'} 
              alt="mousepad" 
              width={400} 
              height={156} 
              quality={100} 
            />
          </li>
          <li>
            <Image 
              src={'/img/equips/keyboard.png'} 
              alt="teclado" 
              width={400} 
              height={156} 
              quality={100} 
            />
          </li>
        </ul>
      </div>
    </div>
  </main>
  )
}
