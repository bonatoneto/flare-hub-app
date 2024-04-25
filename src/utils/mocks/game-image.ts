import { ImageProps } from "components/GameImage/page"

interface GameImageDataProp {
  games: ImageProps[]
}

export const GameImageData: GameImageDataProp = {
  games: [
    {
      firstImage: {
        src: '/img/games/lol.png',
        alt: 'banner-league-of-legends',
      },
      secondImage: {
        src: '/img/games/team-lol.png',
        alt: 'banner-league-of-legends',
      },
      url: '/league-of-legends/times',
    },
    {
      firstImage: {
        src: '/img/games/cs2.png',
        alt: 'banner-counter-strike-2',
      },
      secondImage: {
        src: '/img/games/team-cs2.png',
        alt: 'banner-counter-strike-2',
      },
      url: '/counter-strike-2/times',
    },
    {
      firstImage: {
        src: '/img/games/valorant.png',
        alt: 'banner-valorant',
      },
      secondImage: {
        src: '/img/games/team-valorant.png',
        alt: 'banner-valorant',
      },
      url: '/valorant/times',
    },
    {
      firstImage: {
        src: '/img/games/r6.png',
        alt: 'banner-rainbow-six',
      },
      secondImage: {
        src: '/img/games/team-r6.png',
        alt: 'banner-rainbow-six',
      },
      url: '/rainbow-six-siege/times',
    },
  ]
}