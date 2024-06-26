type EquipmentProp = {
  brand: string
  name: string
  imagePath: string
}

export const Equipment = ({ brand, name, imagePath }: EquipmentProp) => {
  return (
    <div className="flex items-center gap-4 h-full p-6 rounded-2xl bg-neutral-950">
      <div>
        <img
          src={`${imagePath}`}
          alt="equipamento"
          className="max-w-32 max-h-32"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl text-white font-bold">{brand}</p>
        <p className="text-xl text-white font-bold">{name}</p>
      </div>
    </div>
  )
}