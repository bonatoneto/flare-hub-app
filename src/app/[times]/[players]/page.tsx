import GameImage from "components/GameImage/page";
import { getTeam } from "services/services";

interface PageParamsProps {
  params: {
    times: string
  }
}

export default async function TeamsPage(props: PageParamsProps) {
  const getSlugByURL = props.params.times
  const teamsData = await getTeam(getSlugByURL)
  return (
    <main className="flex justify-center bg-neutral-900">
      <div className="flex w-full max-w-7xl mt-32 mb-32 mr-6 ml-6">
        <ul className="flex flex-wrap justify-center gap-8">
          {teamsData.data.players.map((item, index) => (
            <li key={item._id}>
              <GameImage
                firstImage={item.image1}
                secondImage={item.image2}
                url={'/'}
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