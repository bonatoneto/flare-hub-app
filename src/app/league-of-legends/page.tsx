import GameImage from "components/MainImages/page";
import { TeamsImageData } from "utils/mocks/teams-image";

export default function LeagueOfLegendsTeamsPage() {
  const cs2TeamsData = TeamsImageData
  return (
    <main className="flex justify-center bg-neutral-900">
      <div className="flex w-full max-w-7xl mt-32 mb-32 mr-6 ml-6">
        <ul className="flex flex-wrap justify-center gap-8">
          {cs2TeamsData && cs2TeamsData.teamsLol.map((item, index) => (
            <li key={index}>
              <GameImage
                firstGameImage={item.firstGameImage}
                secondGameImage={item.secondGameImage}
                url={item.url}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}