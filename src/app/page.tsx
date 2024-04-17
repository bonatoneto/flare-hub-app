import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-screen justify-center bg-neutral-900">
      <div className="flex w-full max-w-7xl mt-32 mb-32 mr-6 ml-6">
        <div className="flex flex-wrap justify-center gap-8">
          <Image 
            src="/img/lol.png" 
            alt="banner-league-of-legends"
            width={296} 
            height={670} 
            quality={100} 
            priority={true} 
            style={{objectFit: "contain"}}
          />
          <Image 
            src="/img/cs2.png" 
            alt="banner-counter-strike-2"
            width={296} 
            height={670} 
            quality={100} 
            priority={true} 
            style={{objectFit: "contain"}}
          />
          <Image 
            src="/img/valorant.png" 
            alt="banner-valorant"
            width={296} 
            height={670} 
            quality={100} 
            priority={true} 
            style={{objectFit: "contain"}}
          />
          <Image 
            src="/img/r6.png" 
            alt="banner-rainbow-six"
            width={296} 
            height={670} 
            quality={100} 
            priority={true} 
            style={{objectFit: "contain"}}
          />
        </div>
      </div>
    </main>
  )
}
