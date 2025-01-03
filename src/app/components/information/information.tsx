import { SectionTitle } from '../sectionTitle/section-title';
import "./information.scss"

export function Info(){
    return (
        <div className="infos">
            <SectionTitle text="Idiomas"/>
            <div className="languages-info">
                <span>🇧🇷 PT-BR - Nativo</span>
                <span>🇺🇸 Inglês - Intermediário</span>
            </div>
            <SectionTitle text="Educação 🎓"/>
            <div className="educational-info">
                <span>Técnico em Informática - IFRN Parelhas</span>
                <span>Curso de Formação Inicial e Continuada (FIC) em sistemas embarcados do projeto de 
                    residência em TIC 37 - IFRN - Campus Avançado Natal - Zona Leste</span>
          </div>
        </div>
    )
}