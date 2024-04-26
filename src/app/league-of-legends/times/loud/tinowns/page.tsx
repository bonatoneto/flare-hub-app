import Image from "next/image"
import playertinowns from "../../../../../../public/img/teams-lol/loud/tinowns.png"

export default function Player() {
  return (
    <main className="flex justify-center bg-neutral-900">
    <div className="flex w-full max-w-7xl mt-32 mb-32 mr-6 ml-6 gap-6">
      <div>
        <Image 
          src={playertinowns} 
          alt="jogador-tinowns" 
          height={1200}  
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-between gap-6">
        <div className="w-full max-w-3xl flex flex-col gap-10">
          <h1 className="text-5xl text-white font-bold">
            Thiago <span className="italic font-extrabold">“tinowns”</span> Sartori
          </h1>
          <p className="text-white text-3xl">
          tinowns é o mid laner da LOUD desde 2021, o único jogador em atividade desde 2013 no cenário e mantendo o alto nível, sendo considerado o melhor mid do país. Hoje com 6 títulos é o mid a ser batido.
          </p>
        </div>
        <ul className="w-full flex flex-wrap gap-5">
          <li>
            <Image 
              src={'/img/equips/mousetinowns.png'} 
              alt="mouse" 
              width={400} 
              height={156} 
              quality={100} 
            />
          </li>
          <li>
            <Image 
              src={'/img/equips/headsettinowns.png'} 
              alt="headset" 
              width={400} 
              height={156} 
              quality={100} 
            />
          </li>
          <li>
            <Image 
              src={'/img/equips/mousepadtinowns.png'} 
              alt="mousepad" 
              width={400} 
              height={156} 
              quality={100} 
            />
          </li>
          <li>
            <Image 
              src={'/img/equips/keyboardtinowns.png'} 
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
