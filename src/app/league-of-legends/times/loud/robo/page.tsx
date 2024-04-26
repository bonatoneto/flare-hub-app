import Image from "next/image"

export default function Player() {
  return (
    <main className="flex justify-center bg-neutral-900">
    <div className="md:flex w-full max-w-7xl sm:mt-16 mt-12 mb-32 mr-6 ml-6 gap-6">
      <div className="flex justify-center md:min-w-56 md:max-h-main-image">
        <img
          src={'/img/teams-lol/loud/robo.png'} 
          alt="jogador-robo" 
        />
      </div>
      <div className="flex flex-col justify-between gap-6 mt-16 md:mt-0">
        <div className="w-full max-w-3xl flex flex-col gap-10">
          <h1 className="md:text-5xl text-2xl text-white font-bold">
            Leonardo <span className="italic font-extrabold">“Robo”</span> Souza
          </h1>
          <p className="text-white xl:text-3xl text-xl">
            Robo é o top laner da LOUD desde 2021, com passagens vitoriosas por Keyd, RED Canids, CNB, Flamengo e paiN. Hoje com 7 títulos é o maior campeão da história do CBLOL.
          </p>
        </div>
        <ul className="w-full flex flex-wrap gap-5">
          <li>
            <Image 
              src={'/img/equips/mouseRobo.png'} 
              alt="mouse" 
              width={400} 
              height={156} 
              quality={100} 
            />
          </li>
          <li>
            <Image 
              src={'/img/equips/headsetRobo.png'} 
              alt="headset" 
              width={400} 
              height={156} 
              quality={100} 
            />
          </li>
          <li>
            <Image 
              src={'/img/equips/mousepadRobo.png'} 
              alt="mousepad" 
              width={400} 
              height={156} 
              quality={100} 
            />
          </li>
          <li>
            <Image 
              src={'/img/equips/keyboardRobo.png'} 
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
