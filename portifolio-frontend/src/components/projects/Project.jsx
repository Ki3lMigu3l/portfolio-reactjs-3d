import React from 'react'
import './Project.css'
import Portfolio from "../../assets/projetos/portfolio.png"
import Cordarius from "../../assets/projetos/cordarius.png"
import Mibo from "../../assets/projetos/mibo.png"

const projects = [
  {
    id: 1,
    title: "Meu Porfólio",
    description: "Este portfólio é uma aplicação web desenvolvida com React que tem como objetivo apresentar meus projetos e compartilhar um pouco sobre minha trajetória profissional. Ele reflete minha evolução como desenvolvedor e destaca as tecnologias e ferramentas que utilizo.",
    image: Portfolio,
    technologies: ["react", "css", "javascript"],
  },
  {
    id: 2,
    title: "Cordarius Delivery",
    description: "O projeto Cordarius Delivery é uma página de delivery responsiva projetada para oferecer uma experiência de usuário intuitiva e eficiente, tanto em dispositivos móveis quanto em desktops.",
    image: Cordarius,
    technologies: ["react", "css", "javascript"],
  },
  {
    id: 3,
    title: "Mibo API",
    description: "Mibo API é uma aplicação web Full Stack que consome a API da Intelbras para realizar consultas, desvincular contas, adicionar e remover dispositivos da blacklist. Além disso, a aplicação fornece informações detalhadas sobre câmeras específicas, como firmware, endereço MAC, status de conexão, entre outros.",
    image: Mibo,
    technologies: ["spring", "swagger", "angular", "tailwind", "docker", "mysql", "nginx"],
  },
];

const techIcons = {
  spring: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  nginx: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  swagger: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
};

const Project = () => {
  return (
    <section className="projects-section">
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech) => (
                <img
                  key={tech}
                  src={techIcons[tech]}
                  alt={tech}
                  title={tech}
                  className="tech-icon"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Project