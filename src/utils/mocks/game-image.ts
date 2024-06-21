import { ImageProps } from "components/GameImage/page"

interface GameImageDataProp {
  games: ImageProps[]
}

export const GameImageData: GameImageDataProp = {
  games: [
    {
      firstImage: '/img/games/lol.png',
      secondImage: '/img/games/team-lol.png',
      url: '/leagueOfLegends',
    },
    {
      firstImage: '/img/games/cs2.png',
      secondImage: '/img/games/team-cs2.png',
      url: '/counterStrike2',
    },
    {
      firstImage: '/img/games/valorant.png',
      secondImage: '/img/games/team-valorant.png',
      url: '/valorant',
    },
    {
      firstImage: '/img/games/r6.png',
      secondImage: '/img/games/team-r6.png',
      url: '/rainbowSixSiege',
    },
  ]
}