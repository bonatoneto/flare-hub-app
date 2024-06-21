import { ButtonProps } from "utils/types/button"

export const IconButton = ({ text, iconPath }: ButtonProps) => {
  return (
  <button
      className="flex items-center justify-center gap-2 w-full p-3 rounded-lg border text-base font-medium text-gray-950 hover:bg-red-50 bg-slate-100 transition-all"
      type="submit"
    >
      <img src={iconPath} alt="Ícone do botão" />
      {text}
    </button>
  )
}
