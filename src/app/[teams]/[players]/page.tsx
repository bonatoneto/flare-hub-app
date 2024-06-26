import GameImage from "components/GameImage/page";
import { MainContainer } from "components/MainContainer";
import { getTeam } from "services/services";

interface PageParamsProps {
  params: {
    players: string
    teams: string
  }
}

export default async function TeamsPage(props: PageParamsProps) {
  const getTeamSlug = props.params.teams
  const getPlayersSlug = props.params.players
  const teamsData = await getTeam(getPlayersSlug)

  return (
    <MainContainer>
      <div className="flex w-full max-w-7xl mt-32 mb-32 mr-6 ml-6">
        <ul className="flex flex-wrap justify-center gap-8">
          {teamsData.data.players.map((item) => (
            <li key={item._id}>
              <GameImage
                firstImage={item.image1}
                secondImage={item.image2}
                url={`/${getTeamSlug}/${getPlayersSlug}/${item.slug}`}
                width={296}
                height={670}
              />
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  )
}