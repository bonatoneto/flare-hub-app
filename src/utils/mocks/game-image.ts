import { ImageProps } from "components/GameImage/page"

interface GameImageDataProp {
  games: ImageProps[]
}

export const GameImageData: GameImageDataProp = {
  games: [
    {
      firstGameImage: {
        src: '/img/games/lol.png',
        alt: 'banner-league-of-legends',
      },
      secondGameImage: {
        src: '/img/games/team-lol.png',
        alt: 'banner-league-of-legends',
      },
      url: '/league-of-legends/times',
    },
    {
      firstGameImage: {
        src: '/img/games/cs2.png',
        alt: 'banner-counter-strike-2',
      },
      secondGameImage: {
        src: '/img/games/team-cs2.png',
        alt: 'banner-counter-strike-2',
      },
      url: '/counter-strike-2/times',
    },
    {
      firstGameImage: {
        src: '/img/games/valorant.png',
        alt: 'banner-valorant',
      },
      secondGameImage: {
        src: '/img/games/team-valorant.png',
        alt: 'banner-valorant',
      },
      url: '/valorant/times',
    },
    {
      firstGameImage: {
        src: '/img/games/r6.png',
        alt: 'banner-rainbow-six',
      },
      secondGameImage: {
        src: '/img/games/team-r6.png',
        alt: 'banner-rainbow-six',
      },
      url: '/rainbow-six-siege/times',
    },
  ]
}