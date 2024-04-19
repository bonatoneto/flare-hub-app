import { ImageProps } from "components/GameImage/page"

interface TeamsImageDataProp {
  teams: ImageProps[]
}

export const TeamsImageData: TeamsImageDataProp = {
  teams: [
    {
      firstGameImage: {
        src: '/img/loud.png',
        alt: 'time de league of legends da Loud',
      },
      secondGameImage: {
        src: '/img/loud.png',
        alt: 'Time de League of Legends da Loud',
      },
      url: '/',
    },
    {
      firstGameImage: {
        src: '/img/pain.png',
        alt: 'Time de counter strike 2 da Pain Gaming',
      },
      secondGameImage: {
        src: '/img/pain.png',
        alt: 'Time de Counter Strike 2 da Pain Gaming',
      },
      url: '/',
    },
    {
      firstGameImage: {
        src: '/img/keyd.png',
        alt: 'Time de Valorant da Vivo Keyd',
      },
      secondGameImage: {
        src: '/img/keyd.png',
        alt: 'Time de Valorant da Vivo Keyd',
      },
      url: '/',
    },
    {
      firstGameImage: {
        src: '/img/red.png',
        alt: 'Time de Rainbow Six Siege da Red Canids',
      },
      secondGameImage: {
        src: '/img/red.png',
        alt: 'Time de Rainbow Six Siege da Red Canids',
      },
      url: '/',
    }
  ]
}