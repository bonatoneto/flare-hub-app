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
        alt: 'time de league of legends da LOUD',
      },
      secondImage: {
        src: '/img/teams-lol/team-lol-loud.png',
        alt: 'Time de League of Legends da LOUD',
      },
      url: '/league-of-legends/times/loud',
    },
    {
      firstImage: {
        src: '/img/teams-lol/pain.png',
        alt: 'Time de League of Legends da paiN Gaming',
      },
      secondImage: {
        src: '/img/teams-lol/team-lol-pain.png',
        alt: 'Time de League of Legends da paiN Gaming',
      },
      url: '/league-of-legends/times/pain',
    },
    {
      firstImage: {
        src: '/img/teams-lol/keyd.png',
        alt: 'Time de League of Legends da Vivo Keyd Stars',
      },
      secondImage: {
        src: '/img/teams-lol/team-lol-keyd.png',
        alt: 'Time de League of Legends da Vivo Keyd Stars',
      },
      url: '/league-of-legends/times/keyd',
    },
    {
      firstImage: {
        src: '/img/teams-lol/red.png',
        alt: 'Time de League of Legends da RED Canids',
      },
      secondImage: {
        src: '/img/teams-lol/team-lol-red.png',
        alt: 'Time de League of Legends da RED Canids',
      },
      url: '/league-of-legends/times/red',
    }
  ],
  teamsCs2: [
    {
      firstImage: {
        src: '/img/teams-cs2/furia.png',
        alt: 'Time de Counter-Strike 2 da Furia',
      },
      secondImage: {
        src: '/img/teams-cs2/team-cs2-furia.png',
        alt: 'Time de Counter Strike 2 da Furia',
      },
      url: '/counter-strike-2/times/furia',
    },
    {
      firstImage: {
        src: '/img/teams-cs2/pain.png',
        alt: 'Time de Counter-Strike 2 da Pain',
      },
      secondImage: {
        src: '/img/teams-cs2/team-cs2-pain.png',
        alt: 'Time de Counter-Strike 2 da Pain',
      },
      url: '/counter-strike-2/times/pain',
    },
    {
      firstImage: {
        src: '/img/teams-cs2/mibr.png',
        alt: 'Time de Counter-Strike 2 da Furia',
      },
      secondImage: {
        src: '/img/teams-cs2/team-cs2-mibr.png',
        alt: 'Time de Counter-Strike 2 da MIBR',
      },
      url: '/counter-strike-2/times/mibr',
    },
    {
      firstImage: {
        src: '/img/teams-cs2/imperial.png',
        alt: 'Time de Counter-Strike 2 da Imperial',
      },
      secondImage: {
        src: '/img/teams-cs2/team-cs2-imperial.png',
        alt: 'Time de Counter-Strike 2 da Imperial',
      },
      url: '/counter-strike-2/times/imperial',
    }
  ]
}