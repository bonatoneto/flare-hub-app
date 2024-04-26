import GameImage from "components/GameImage/page";
import { TeamsImageData } from "utils/mocks/teams-image";

export default function RainbowSixSiegeTeamsPage() {
  const r6TeamsData = TeamsImageData
  return (
    <main className="flex justify-center bg-neutral-900">
      <div className="flex w-full max-w-7xl mt-32 mb-32 mr-6 ml-6">
        <ul className="flex flex-wrap justify-center gap-8">
          {r6TeamsData && r6TeamsData.teamsLol.map((item, index) => (
            <li key={index}>
              <GameImage
                firstImage={item.firstImage}
                secondImage={item.secondImage}
                url={item.url}
                width={296}
                height={670}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}