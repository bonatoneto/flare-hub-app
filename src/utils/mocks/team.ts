import { ImageProps } from "components/GameImage/page"

interface SponsorProps {
	path: string
	alt: string
}

interface TeamProps {
	playersImage: ImageProps[]
	sponsors: SponsorProps[]
}

interface TeamDataProps {
	loud: TeamProps
}

export const TeamsData: TeamDataProps = {
	loud: {
		playersImage: [
			{	
				firstImage: {
					src: '/img/teams-lol/loud/player1.png',
					alt: 'top-laner-loud',
				},
				secondImage: {
					src: '/img/teams-lol/loud/player1icon.png',
					alt: 'top-laner-loud/'
				},
				url: '/league-of-legends/times/loud/robo',
				
			},
			{
				firstImage: {
					src: '/img/teams-lol/loud/player2.png',
					alt: 'jungler-loud'
				},
				secondImage: {
					src: '/img/teams-lol/loud/player2icon.png',
					alt: 'jungler-loud'
				},
				url: '/league-of-legends/times/loud'
			},
			{
				firstImage: {
					src: '/img/teams-lol/loud/player3.png',
					alt: 'mid-laner-loud'
				},
				secondImage: {
					src: '/img/teams-lol/loud/player3icon.png',
					alt: 'mid-laner-loud'
				},
				url: '/league-of-legends/times/loud'
			},
			{
				firstImage: {
					src: '/img/teams-lol/loud/player4.png',
					alt: 'adcarry-loud'
				},
				secondImage: {
					src: '/img/teams-lol/loud/player4icon.png',
					alt: 'adcarry-loud'
				},
				url: '/league-of-legends/times/loud'
			},
			{
				firstImage: {
					src: '/img/teams-lol/loud/player5.png',
					alt: 'support-loud'
				},
				secondImage: {
					src: '/img/teams-lol/loud/player5icon.png',
					alt: 'support-loud'
				},
				url: '/league-of-legends/times/loud'
			},
		],
		sponsors: [
			{
				path: '/img/sponsors/itau.png',
				alt: 'itau',
			},
			{
				path: '/img/sponsors/boticario.png',
				alt: 'boticario',
			},
			{
				path: '/img/sponsors/tim.png',
				alt: 'tim',
			},
			{
				path: '/img/sponsors/mentos.png',
				alt: 'mentos',
			},
			{
				path: '/img/sponsors/samsung.png',
				alt: 'samsung',
			},
		]
	},
	 
}