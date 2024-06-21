import { SectionTitle } from '../sectionTitle/section-title';
import "./information.scss"

export function Info(){
    return (
        <div className="infos">
            <SectionTitle text="Linguages"/>
            <div className="languages-info">
                <span>🇧🇷 PT-BR - Nativo</span>
                <span>🇺🇸 Inglês - Intermediário</span>
            </div>
            <SectionTitle text="Educação"/>
            <div className="educational-info">
                <span>🎓</span>
                <span>Técnico em Informática - IFRN Parelhas</span>
          </div>
        </div>
    )
}