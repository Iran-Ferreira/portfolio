import { Header } from "./components/header/header";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>
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
