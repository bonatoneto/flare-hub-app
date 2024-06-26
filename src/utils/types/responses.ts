export interface TeamsGameResponse {
  teams: [
    {
      _id: string,
      name: string,
      description: string,
      slug: string,
      teamType: string,
      image1: string,
      image2: string,
      players: [],
    }
  ]
}

interface PlayerType {
  _id: string,
  firstName: string,
  lastName: string,
  nickName: string,
  description: string,
  nacionality: string,
  age: string,
  role: string,
  image1: string,
  image2: string,
  slug: string,
}

export interface TeamResponse {
  data: {
    _id: string,
    name: string,
    slug: string,
    description: string,
    teamType: string,
    image1: string,
    image2: string,
    players: PlayerType[]
  }
}

interface Equipment {
  _id: string
  name: string
  brand: string
  slug: string
  image: string
}

export interface PlayerResponse {
  _id: string
  firstName: string
  lastName: string
  nickName: string
  description: string
  nacionality: string
  age: string
  role: string
  image1: string
  image2: string
  slug: string
  equipment: {
    headset: Equipment
    keyboard: Equipment
    mouse: Equipment
    mousepad: Equipment
  }
}