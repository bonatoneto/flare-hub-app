import PlayersImages from "components/PlayersImages/page";
import { PlayersImageData } from "utils/mocks/players-image";

export default function LeagueOfLegendsTeamsPage() {
  const playersData = PlayersImageData
  return (
    <main className="flex justify-center bg-neutral-900">
      <div className="flex w-full max-w-7xl mt-32 mb-32 mr-6 ml-6">
        <ul className="flex flex-wrap justify-center gap-8">
          {playersData && playersData.players.map((item, index) => (
            <li key={index}>
              <PlayersImages
                playerImage={item.playerImage}
                url={item.url}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}