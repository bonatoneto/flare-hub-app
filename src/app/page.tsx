import BannerCarousel from 'components/BannerCarousel'
import GameImage from 'components/GameImage/page'
import { MainContainer } from 'components/MainContainer'
import { GameImageData } from 'utils/mocks/game-image'

export default function Home() {
  const gamesImagesData = GameImageData
  return (
    <MainContainer>
      <div className="flex flex-col w-full max-w-7xl mt-8 mb-32 mx-6">
        <ul className="flex flex-wrap justify-between gap-8">
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
        <div className="mt-8 w-full">
          <BannerCarousel />
        </div>
      </div>
    </MainContainer>
  )
}
