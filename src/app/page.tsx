import BannerCarousel from 'components/BannerCarousel'
import GameImage from 'components/GameImage/page'
import { GameImageData } from 'utils/mocks/game-image'

export default function Home() {
  const gamesImagesData = GameImageData

  return (
    <main className="flex justify-center bg-neutral-900">
      <div className="flex flex-col w-full max-w-7xl mt-8 mb-32">
        <ul className="flex flex-wrap justify-center gap-8 mr-6 ml-6">
          {gamesImagesData &&
            gamesImagesData.games.map((item, index) => (
              <li key={index}>
                <GameImage
                  firstImage={item.firstImage}
                  secondImage={item.secondImage}
                  url={item.url}
                  width={282}
                  height={670}
                />
              </li>
            ))}
        </ul>
        <div className="mt-8 mr-6 ml-6">
          <BannerCarousel />
        </div>
      </div>
    </main>
  )
}
