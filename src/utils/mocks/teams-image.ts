import { ImageProps } from "components/GameImage/page"

interface TeamsImageDataProp {
  teamsLol: ImageProps[]
  teamsCs2: ImageProps[]
}

export const TeamsImageData: TeamsImageDataProp = {
  teamsLol: [
    {
      firstImage: {
        src: '/img/teams-lol/loud.png',
        alt: 'time de league of legends da Loud',
      },
      secondImage: {
        src: '/img/teams-lol/team-lol-loud.png',
        alt: 'Time de League of Legends da Loud',
      },
      url: '/league-of-legends/times/loud',
    },
    {
      firstImage: {
        src: '/img/teams-lol/pain.png',
        alt: 'Time de League of Legends da Pain Gaming',
      },
      secondImage: {
        src: '/img/teams-lol/team-lol-pain.png',
        alt: 'Time de League of Legends da Pain Gaming',
      },
      url: '/',
    },
    {
      firstImage: {
        src: '/img/teams-lol/keyd.png',
        alt: 'Time de League of Legends da Vivo Keyd',
      },
      secondImage: {
        src: '/img/teams-lol/team-lol-keyd.png',
        alt: 'Time de League of Legends da Vivo Keyd',
      },
      url: '/',
    },
    {
      firstImage: {
        src: '/img/teams-lol/red.png',
        alt: 'Time de League of Legends da Red Canids',
      },
      secondImage: {
        src: '/img/teams-lol/team-lol-red.png',
        alt: 'Time de League of Legends da Red Canids',
      },
      url: '/',
    }
  ],
  teamsCs2: [
    {
      firstImage: {
        src: '/img/teams-cs2/furia.png',
        alt: 'Time de Counter Strike 2 da Furia',
      },
      secondImage: {
        src: '/img/teams-cs2/team-cs2-furia.png',
        alt: 'Time de Counter Strike 2 da Furia',
      },
      url: '/',
    },
    {
      firstImage: {
        src: '/img/teams-cs2/pain.png',
        alt: 'Time de Counter Strike 2 da Pain',
      },
      secondImage: {
        src: '/img/teams-cs2/team-cs2-pain.png',
        alt: 'Time de Counter Strike 2 da Pain',
      },
      url: '/',
    },
    {
      firstImage: {
        src: '/img/teams-cs2/mibr.png',
        alt: 'Time de Counter Strike 2 da Furia',
      },
      secondImage: {
        src: '/img/teams-cs2/team-cs2-mibr.png',
        alt: 'Time de Counter Strike 2 da MIBR',
      },
      url: '/',
    },
    {
      firstImage: {
        src: '/img/teams-cs2/imperial.png',
        alt: 'Time de Counter Strike 2 da Imperial',
      },
      secondImage: {
        src: '/img/teams-cs2/team-cs2-imperial.png',
        alt: 'Time de Counter Strike 2 da Imperial',
      },
      url: '/',
    }
  ]
}