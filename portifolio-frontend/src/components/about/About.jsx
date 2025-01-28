import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about-me-container">
    <div className="about-me-content">
      <h1 className="about-me-title" id='aboutme'>Sobre Mim</h1>
      <p className="about-me-description">
        Meu nome é <strong>Ezequiel Miguel</strong>, sou graduado em <strong>Análise e Desenvolvimento de Sistemas</strong> e tenho mais de <strong>dois anos de experiência</strong> na área de tecnologia.  
      </p>
      <p className="about-me-description">
        Nos últimos anos, venho me especializando em <strong>Java</strong> com foco no ecossistema <strong>Spring</strong>, criando soluções robustas e escaláveis. Também trabalho com tecnologias de <strong>frontend</strong> como <strong>React</strong> e <strong>Angular</strong>, desenvolvendo interfaces modernas e responsivas.
      </p>
      <div className="about-me-icons">
        <h2 className="about-me-tech-title">Tecnologias que utilizo:</h2>
        <div className="icons">
          <i className="fab fa-java icon" title="Java" /> 
          <i className="fab fa-react icon" title="React" />
          <i className="fab fa-angular icon" title="Angular" />
          <i className="fab fa-docker icon" title="Docker" />
          <i className="fa-brands fa-css3 icon" />
          <i className="fa-brands fa-git-alt icon"/>
          <i className="fa-brands fa-github icon" />
        </div>
      </div>
      <div className="about-me-links">
        <a
          href="https://www.linkedin.com/in/ezequiel-miguel"
          target="_blank"
          rel="noopener noreferrer"
          className="about-me-link"
        >
          <i className="fab fa-linkedin" /> LinkedIn
        </a>
        <a
          href="https://github.com/ki3lmigu3l"
          target="_blank"
          rel="noopener noreferrer"
          className="about-me-link"
        >
          <i className="fab fa-github" /> GitHub
        </a>
      </div>
    </div>
  </section>
  )
}

export default About