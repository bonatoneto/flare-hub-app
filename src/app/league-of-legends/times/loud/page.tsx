import GameImage from "components/GameImage/page"
import { TeamsData } from "utils/mocks/team"

export default function Team() {
  const teamData = TeamsData

  return (
    <main className="flex justify-center bg-neutral-900">
      <div className="flex flex-col w-full max-w-7xl mt-16 mb-16 mr-6 ml-6 gap-10">
        <ul className="flex flex-wrap justify-center gap-4">
          {teamData && teamData.loud.playersImage.map((item, index) => (
            <li key={`${index}-${item.firstImage.alt}`}>
              <GameImage
                firstImage={item.firstImage}
                secondImage={item.secondImage}
                url={item.url}
                width={240}
                height={392}
              />
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-between gap-8">
          <div>
            <div className="flex justify-between gap-6">
              <div className="flex flex-col w-full max-w-2xl gap-6">
                <h2 className="text-white font-bold text-lg">O que é ser <span className="text-green-500 font-extrabold italic">LOUD</span>?</h2>
                <p className="text-white">A LOUD é a tetra-campeã consecutiva do CBLOL, o primeiro time da história a conseguir esse feito, e segue com sangue nos olhos para representar o Brasil no mundial. O inferno verde é uma das maiores torcidas do Brasil, seja pra apoiar ou cobrar, em boa ou má fase, a LOUD sempre é o time a ser batido.</p>
              </div>
              <div className="flex flex-col text-white font-bold text-lg">
                <p className="mb-6">Comissão técnica</p>
                <span>Son <span className="font-extrabold italic">“Stardust”</span> Seok-hee</span>
                <span>Victor <span className="font-extrabold italic">“SrVenancio”</span> Venancio</span>
              </div>
            </div>
          </div>
          <div></div>
          <ul className="flex items-center gap-6">
            {teamData && teamData.loud.sponsors.map((item, index) => (
              <li key={`${index}-${item.alt}`}>
                <img src={item.path} alt={item.alt} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}