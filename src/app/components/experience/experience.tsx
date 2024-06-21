import { SectionTitle } from '../sectionTitle/section-title';

import "./experience.scss"
import { Skill } from '../skill/skill';

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Sobre"/>
            <p>Em busca da primeira vaga como programador, me formei como técnico em Informática pelo IFRN Parelhas e 
                lá pude aprender programação e ter gosto pela tecnologia.</p>
            <div className="experience-time">
                <Skill image="/react.png" measure={2} years="2 anos"/>
                <Skill image="/ts.png" measure={2} years="2 anos"/>
                <Skill image="/js.png" measure={2} years="2 anos"/>
            </div>
        </div>
    )
}