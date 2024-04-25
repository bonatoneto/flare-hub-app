import GameImage from 'components/MainImages/page'
import { GameImageData } from 'utils/mocks/game-image'

export default function Home() {
  const gamesImagesData = GameImageData

  return (
    <main className="flex justify-center bg-neutral-900">
      <div className="flex w-full max-w-7xl mt-32 mb-32 mr-6 ml-6">
        <ul className="flex flex-wrap justify-center gap-8">
          {gamesImagesData && gamesImagesData.games.map((item, index) => (
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
