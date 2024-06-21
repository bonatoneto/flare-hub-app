import { Button } from "components/Button"
import { IconButton } from "components/IconButton"
import { Input } from "components/Input"

export const FormLogin = () => {
  return (
    <div className="flex flex-col items-center w-full py-20 px-6">
      <div className="w-full flex flex-col items-center w-full max-w-96">
        <img src="/img/flare-hub-logo.png" alt="Logo Flare Hub" width={240}/>
        <div className="w-full flex flex-col items-center gap-6">
          <p className="text-4xl font-semibold text-red-800 mt-8">Login</p>
          <Input 
            id="email"
            label="E-mail"
            placeholder="Digite seu e-mail" 
            type="email"
          />
          <Input 
            id="password"
            label="Senha"
            placeholder="Digite sua senha" 
            type="password"
          />
        </div>
        <div className="flex justify-end w-full mt-1">
          <a href="/" className="text-base font-medium text-red-800">
            Esqueceu sua senha?
          </a>
        </div>
        <div className="flex flex-col items-center w-full gap-2 mt-8">
          <Button text="Entrar" />
          <IconButton text="Faça login com o Google" iconPath="/icons/google.svg" />
          <p className="text-lg text-red-800 font-medium">Ou</p>
          <Button text="Crie já sua conta" />
        </div>
      </div>
    </div>
  )
}