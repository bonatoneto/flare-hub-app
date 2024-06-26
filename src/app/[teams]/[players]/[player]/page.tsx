import { Equipment } from "components/DescriptionEquip"
import { MainContainer } from "components/MainContainer"
import React from "react"
import { getPlayer } from "services/services"

interface PageParamsProps {
  params: {
    player: string
  }
}

export default async function Player(props: PageParamsProps) {
  const getPlayerSlug = props.params.player
  const playerData = await getPlayer(getPlayerSlug)
  const platerName =
    `${playerData.firstName} "${playerData.nickName}" ${playerData.lastName}`

  return (
    <MainContainer>
      <div className="w-full max-w-7xl mt-32 mb-32 mr-6 ml-6 gap-6">
        <div className="flex gap-8">
          <img
            src={playerData.image1}
            alt={`jogador${playerData.nickName}`}
            height={1200}
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col justify-between gap-6">
              <div className="w-full max-w-3xl flex flex-col gap-10">
                <h2 className="text-5xl text-white font-bold">{platerName}</h2>
                <p className="text-white text-3xl">{playerData.description}</p>
              </div>
            </div>
            <ul className="grid grid-cols-2 w-full h-fit gap-6">
              <li className="max-w-96 h-full">
                <Equipment
                  brand={playerData.equipment.headset.brand}
                  name={playerData.equipment.headset.name}
                  imagePath={playerData.equipment.headset.image}
                />
              </li>
              <li className="max-w-96 h-full">
                <Equipment
                  brand={playerData.equipment.keyboard.brand}
                  name={playerData.equipment.keyboard.name}
                  imagePath={playerData.equipment.keyboard.image}
                />
              </li>
              <li className="max-w-96 h-full">
                <Equipment
                  brand={playerData.equipment.mouse.brand}
                  name={playerData.equipment.mouse.name}
                  imagePath={playerData.equipment.mouse.image}
                />
              </li>
              <li className="max-w-96 h-full">
                <Equipment
                  brand={playerData.equipment.mousepad.brand}
                  name={playerData.equipment.mousepad.name}
                  imagePath={playerData.equipment.mousepad.image}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
  </MainContainer>
  )
}
