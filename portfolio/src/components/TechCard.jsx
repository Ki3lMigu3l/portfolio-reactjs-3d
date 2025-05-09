import React, { useState } from "react";

const techCards = [
  {
    image: "/projects/cordarius.png",
    title: "Cordarius Delivery - Plataforma de Delivery Responsiva",
    description:
      "Desenvolvi uma plataforma de delivery responsiva, focada em uma experiência de usuário intuitiva, sem depender de backend ou banco de dados, garantindo alta performance e funcionalidade.",
    details:
      "O Cordarius Delivery é uma aplicação web totalmente responsiva, projetada para funcionar sem a necessidade de integração com servidores ou banco de dados. Utilizando tecnologias como React e Tailwind, a plataforma proporciona uma navegação fluida e fácil, tanto em dispositivos móveis quanto em desktops. A solução foi idealizada para oferecer uma experiência de usuário simples, rápida e eficiente, simulando o processo de um serviço de delivery de maneira funcional e sem a complexidade de um sistema tradicional com backend. A interface foi desenvolvida para ser intuitiva e adaptável, com foco na agilidade do processo de pedido e entrega.",
    technologies: ["git", "react", "tailwind"],
    link: "https://cordarius-delivery.vercel.app/",
    repository: "https://github.com/Ki3lMigu3l/cordarius-delivery-fullstack",
  },
  {
    image: "/projects/mibo.png",
    title: "Plataforma de Gestão de Dispositivos Intelbras",
    description:
      "Aplicação full stack (Spring, Angular, MySQL, TailwindCSS) integrada à API da Intelbras para gestão de dispositivos de segurança, aumentando a eficiência na administração e atendimento técnico.",
    details:
      "Desenvolvi uma plataforma robusta utilizando o Spring no backend e Angular no frontend, com MySQL para armazenamento de dados e TailwindCSS para um design moderno e responsivo. A integração com a API da Intelbras permite o gerenciamento em tempo real de dispositivos de segurança, proporcionando consultas de dados, controle de dispositivos e administração de contas para técnicos e administradores. A solução resultou em uma redução de 60% no tempo de atendimento e resolução de problemas técnicos, devido à interface amigável e ao controle centralizado, que facilita a operação e minimiza erros humanos.",
    technologies: [
      "git",
      "java",
      "spring",
      "swagger",
      "angular",
      "tailwind",
      "docker",
      "mysql",
    ],
    link: "/",
    repository: "/",
  },
  {
    image: "/projects/portfolio.png",
    title: "Ezcoder - Portfolio Profissional",
    description:
      "Desenvolvi uma página de portfolio responsiva utilizando React e TailwindCSS, projetada como uma vitrine interativa para exibir projetos, habilidades e exeriencias de forma moderna e dinâmica.",
    details:
      "A página de portfolio foi construída com React para garantir uma experiência de usuário interativa e rápida, e com TailwindCSS para um design flexível e personalizável. A solução oferece uma interface moderna e responsiva, adaptando-se a diferentes tamanhos de tela, desde dispositivos móveis até desktops. O foco principal é apresentar de maneira clara e atrativa projetos anteriores, habilidades técnicas e informações de contato. A estrutura modular permite fácil atualização e personalização, tornando-a ideal para quem deseja uma presença online profissional e bem estruturada. Além disso, a utilização de React garante uma navegação fluida e dinâmica, enquanto o TailwindCSS proporciona um design minimalista e elegante.",
    technologies: ["git", "react", "tailwind"],
    link: "https://github.com/Ki3lMigu3l/portfolio-reactjs-3d",
    repository: "https://github.com/Ki3lMigu3l/portfolio-reactjs-3d",
  },
  {
    image: "/projects/cardapio.png",
    title: "Cardápio API Fullstack - Gestão de Cardápio de Restaurante",
    description:
      "API RESTful desenvolvida com Spring Boot no backend e React no frontend, utilizando MySQL para armazenamento e TailwindCSS para estilização, para gerenciar itens de cardápio de maneira simples e eficiente.",
    details:
      "O projeto 'Cardápio API Fullstack' é uma aplicação completa, que integra um backend robusto com Spring Boot e um frontend dinâmico em React, visando a gestão eficiente de cardápios de restaurante. A API permite a criação, edição, remoção e listagem de itens de cardápio, com a comunicação com o banco de dados MySQL e interface moderna criada com TailwindCSS. A aplicação está completamente containerizada com Docker, facilitando a implantação e execução de todos os componentes (backend, frontend e banco de dados) com um único comando. Além disso, a documentação da API é gerada automaticamente via Swagger, oferecendo uma interface interativa para testar os endpoints. Testes unitários são realizados com JUnit5, garantindo a confiabilidade do código. O frontend foi desenvolvido utilizando React para uma navegação interativa e ágil, enquanto a estilização com TailwindCSS oferece um design responsivo e minimalista, focado em uma excelente experiência do usuário.",
    technologies: [
      "git",
      "java",
      "spring",
      "swagger",
      "mongodb",
      "react",
      "tailwind",
    ],
    link: "https://github.com/Ki3lMigu3l/cardapio-api-fullstack",
    repository: "https://github.com/Ki3lMigu3l/cardapio-api-fullstack",
  },
];

const techIcons = {
  spring:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  kubernetes:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  terraform:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  nginx:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  swagger:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  linux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  vscode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  jenkins:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  graphql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
};

const TechCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      {/* Grid de cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16 px-4">
        {techCards.map((card, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(card)}
            className="rounded-2xl shadow-xl h-full object-cover overflow-hidden flex flex-col cursor-pointer transform transition duration-300 bg-[#1f1f1f27] hover:scale-[1.03]"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="p-5 flex flex-col flex-1 text-white">
              <h5 className="font-bold text-lg mb-2">{card.title}</h5>
              <p className="text-sm text-[#D5D8EA]">{card.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 px-5 pb-5 mt-auto">
              {card.technologies.map((tech, idx) => (
                <img
                  key={idx}
                  src={techIcons[tech]}
                  alt={tech}
                  title={tech}
                  className="w-6 h-6 transform transition duration-300 hover:scale-[1.05] cursor-pointer"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60 backdrop-blur-md px-4">
          <div className="bg-[#000000] max-w-2xl w-full rounded-sm p-6 text-white relative shadow-2xl animate-fade-in animate-glow">
            {/* Botão fechar */}
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-0 right-1 text-white rounded-full p-1 transition cursor-pointer text-sm"
            >
              ✕
            </button>

            {/* Conteúdo */}
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-full h-full object-cover rounded-md"
            />
            <h2 className="mt-3 text-2xl font-bold mb-2">
              {selectedCard.title}
            </h2>
            <p className="text-sm text-[#D5D8EA] mb-4">
              {selectedCard.details}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {selectedCard.technologies.map((tech, idx) => (
                <img
                  key={idx}
                  src={techIcons[tech]}
                  alt={tech}
                  title={tech}
                  className="w-7 h-7 transform transition duration-300 hover:scale-[1.05] cursor-pointer"
                />
              ))}
            </div>
            {selectedCard.link && (
              <div className="flex gap-5">
                <a
                  href={selectedCard.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 rounded-lg  bg-gradient-to-l from-[#3b0a45] via-[#7a2e64] to-[#9e3d59] 
               text-white font-normal text-sm md:text-base shadow-md 
               focus:outline-none focus:ring-2 focus:ring-[#555] active:scale-95 hover:transform hover:scale-105 transition-all duration-500 
  ease-in-out hover:brightness-110 hover:shadow-2xl "
                >
                  Ver Projeto
                </a>

                <a
                  href={selectedCard.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 rounded-lg  bg-gradient-to-l from-[#9e3d59] via-[#7a2e64] to-[#3b0a45]
                           text-white font-normal text-sm md:text-base shadow-md 
                           focus:outline-none focus:ring-2 focus:ring-[#555] active:scale-95 hover:transform hover:scale-105 transition-all duration-500 
              ease-in-out hover:brightness-110 hover:shadow-2xl cursor-pointer"
                >
                  Repositorio
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TechCard;
