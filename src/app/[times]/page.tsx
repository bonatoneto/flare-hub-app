import GameImage from "components/GameImage/page";
import { getTeamsGame } from "services/services";

interface PageParamsProps {
  params: {
    times: string
  }
}

export default async function TeamsGamePage(props: PageParamsProps) {
  const getGameTeamsByURL = props.params.times
  const teamsGameData = await getTeamsGame(getGameTeamsByURL)

  return (
    <main className="flex justify-center bg-neutral-900">
      <div className="flex w-full max-w-7xl mt-32 mb-32 mr-6 ml-6">
        <ul className="flex flex-wrap justify-center gap-8">
          {teamsGameData.teams.map((team) => (
            <li key={team._id}>
              <GameImage
                firstImage={team.image1}
                secondImage={team.image2}
                url={`/${getGameTeamsByURL}/${team.slug}`}
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