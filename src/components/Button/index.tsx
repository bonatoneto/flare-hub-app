import { ButtonProps } from "utils/types/button"

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className=" w-full p-3 rounded-lg bg-red-800 hover:bg-red-900 transition-all text-white font-medium" onClick={onClick}>
      {text}
    </button>
  )
}