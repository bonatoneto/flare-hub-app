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
              />
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-between gap-8">
          <div>
            <h2 className="">O que é a <span>LOUD</span>?</h2>
            <p>A LOUD é a tri-campeã consecutiva do CBLOL, apenas o segundo time da história a conseguir esse feito, e segue com sangue nos olhos pela quarta taça. O inferno verde é uma das maiores torcidas do Brasil, seja pra apoiar ou cobrar, em boa ou má fase, a LOUD sempre é o time a ser batido.</p>
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