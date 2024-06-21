interface InputProps {
  id: string
  label: string
  type: string
  placeholder: string
}

export const Input = ({ id, label, type, placeholder }: InputProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor={id} className="text-base text-red-800 font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full max-w-96 p-3 border rounded-lg outline-none bg-neutral-700 border-red-800"
      />
    </div>
  )
}