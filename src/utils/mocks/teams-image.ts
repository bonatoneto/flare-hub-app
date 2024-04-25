import { ImageProps } from "components/MainImages/page"

interface TeamsImageDataProp {
  teamsLol: ImageProps[]
  teamsCs2: ImageProps[]
}

export const TeamsImageData: TeamsImageDataProp = {
  teamsLol: [
    {
      firstGameImage: {
        src: '/img/teams-lol/loud.png',
        alt: 'time de league of legends da Loud',
      },
      secondGameImage: {
        src: '/img/teams-lol/team-lol-loud.png',
        alt: 'Time de League of Legends da Loud',
      },
      url: '/league-of-legends/loud',
    },
    {
      firstGameImage: {
        src: '/img/teams-lol/pain.png',
        alt: 'Time de League of Legends da Pain Gaming',
      },
      secondGameImage: {
        src: '/img/teams-lol/team-lol-pain.png',
        alt: 'Time de League of Legends da Pain Gaming',
      },
      url: '/',
    },
    {
      firstGameImage: {
        src: '/img/teams-lol/keyd.png',
        alt: 'Time de League of Legends da Vivo Keyd',
      },
      secondGameImage: {
        src: '/img/teams-lol/team-lol-keyd.png',
        alt: 'Time de League of Legends da Vivo Keyd',
      },
      url: '/',
    },
    {
      firstGameImage: {
        src: '/img/teams-lol/red.png',
        alt: 'Time de League of Legends da Red Canids',
      },
      secondGameImage: {
        src: '/img/teams-lol/team-lol-red.png',
        alt: 'Time de League of Legends da Red Canids',
      },
      url: '/',
    }
  ],
  teamsCs2: [
    {
      firstGameImage: {
        src: '/img/teams-cs2/furia.png',
        alt: 'Time de Counter Strike 2 da Furia',
      },
      secondGameImage: {
        src: '/img/teams-cs2/team-cs2-furia.png',
        alt: 'Time de Counter Strike 2 da Furia',
      },
      url: '/',
    },
    {
      firstGameImage: {
        src: '/img/teams-cs2/pain.png',
        alt: 'Time de Counter Strike 2 da Pain',
      },
      secondGameImage: {
        src: '/img/teams-cs2/team-cs2-pain.png',
        alt: 'Time de Counter Strike 2 da Pain',
      },
      url: '/',
    },
    {
      firstGameImage: {
        src: '/img/teams-cs2/mibr.png',
        alt: 'Time de Counter Strike 2 da Furia',
      },
      secondGameImage: {
        src: '/img/teams-cs2/team-cs2-mibr.png',
        alt: 'Time de Counter Strike 2 da MIBR',
      },
      url: '/',
    },
    {
      firstGameImage: {
        src: '/img/teams-cs2/imperial.png',
        alt: 'Time de Counter Strike 2 da Imperial',
      },
      secondGameImage: {
        src: '/img/teams-cs2/team-cs2-imperial.png',
        alt: 'Time de Counter Strike 2 da Imperial',
      },
      url: '/',
    }
  ]
}