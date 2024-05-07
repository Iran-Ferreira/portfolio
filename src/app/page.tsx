import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="header">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
        <div>
          <h1>Olá, sou Iran Ferreira</h1>
          <h2>Desenvolvedor de Software</h2>
        </div>
      </div>
      <div className="experience">
        <h3>Experiência</h3>
        <p>texto</p>
        <div className="experience-time">

        </div>
        <div className="info">
          <h3>Linguagens</h3>
          <div className="languages-info">
            <span>🇧🇷 PT-BR - Nativo</span>
            <span>🇺🇸 Inglês - Intermediário</span>
          </div>
          <h3>Educação</h3>
          <div className="educational-info">
            <span>🎓</span>
            <span>Colocar depois</span>
          </div>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>Entre em Contato</button>
        </div>
      </div>
    </main>
  );
}
