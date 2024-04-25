import { PlayersImageProps } from "components/PlayersImages/page"

interface PlayersImageDataProp {
  players: PlayersImageProps[]
}

export const PlayersImageData: PlayersImageDataProp = {
  players: [
    {
      playerImage: {
        src: '/img/players-lol/player-1.png',
        alt: 'player-1',
      },
      url: '/',
    },
    {
      playerImage: {
        src: '/img/players-lol/player-2.png',
        alt: 'player-2',
      },
      url: '/',
    },
    {
      playerImage: {
        src: '/img/players-lol/player-3.png',
        alt: 'player-3',
      },
      url: '/',
    },
    {
      playerImage: {
        src: '/img/players-lol/player-4.png',
        alt: 'player-4',
      },
      url: '/',
    },
    {
      playerImage: {
        src: '/img/players-lol/player-5.png',
        alt: 'player-5',
      },
      url: '/',
    }
  ]
}