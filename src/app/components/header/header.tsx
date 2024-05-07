import Image from "next/image";
import "./header.scss"

export function Header(){
    return (
        <div className="header">
        <div>
          <h1>Olá, sou Iran Ferreira</h1>
          <h2>Desenvolvedor de Software</h2>
        </div>
        <Image
          src="/foto_minha.jpg"
          alt="Foto de Iran Ferreira"
          width={325}
          height={310}
          priority
        />
      </div>
    )
}