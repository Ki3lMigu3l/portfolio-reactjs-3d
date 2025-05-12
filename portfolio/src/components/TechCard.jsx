import React, { useState } from "react";
import { X } from "lucide-react";

const techCards = [
  {
    image: "/projects/cordarius.png",
    title: "Cordarius Delivery: Plataforma de Delivery",
    description:
      "Desenvolvi uma plataforma de delivery responsiva e funcional, com foco em usabilidade, alta performance e sem dependência de backend ou banco de dados.",
    details:
      "O Cordarius Delivery é uma aplicação web totalmente responsiva, desenvolvida com React e Tailwind, que simula de forma funcional um serviço de delivery sem utilizar servidores ou banco de dados. Projetada para ser leve e eficiente, oferece uma navegação fluida, interface intuitiva e adaptável a diferentes dispositivos, focando na agilidade do processo de pedido e entrega.",
    technologies: ["git", "react", "tailwind"],
    link: "https://cordarius-delivery.vercel.app/",
    repository: "https://github.com/Ki3lMigu3l/cordarius-delivery-fullstack",
  },
  {
    image: "/projects/mibo.png",
    title: "Mibo API: Plataforma de Gestão de Dispositivos Intelbras",
    description:
      "Aplicação full stack (Spring, Angular, MySQL, TailwindCSS) integrada à API da Intelbras para gerenciamento de dispositivos, otimizando a administração e o suporte técnico.",
    details:
      "Desenvolvi uma plataforma robusta com Spring (backend), Angular (frontend), MySQL e TailwindCSS, integrando a API da Intelbras para gerenciamento em tempo real de dispositivos de segurança. A solução permite consultas, controle e administração centralizada por técnicos e administradores. Com interface intuitiva e design responsivo, reduziu em 60% o tempo de atendimento e resolução de problemas técnicos, otimizando operações e minimizando erros humanos.",
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
    title: "Ezcoder: Portfolio Profissional",
    description:
      "Desenvolvi uma página de portfólio responsiva com React e TailwindCSS, destacando projetos, habilidades e experiências de forma moderna, dinâmica e interativa.",
    details:
      "A página de portfólio foi desenvolvida com React e TailwindCSS, oferecendo uma experiência interativa, responsiva e com design moderno. Apresenta projetos, habilidades e contatos de forma clara e atrativa, adaptando-se a qualquer dispositivo. A estrutura modular facilita atualizações, enquanto React garante fluidez e Tailwind um visual elegante e minimalista.",
    technologies: ["git", "react", "tailwind"],
    link: "https://github.com/Ki3lMigu3l/portfolio-reactjs-3d",
    repository: "https://github.com/Ki3lMigu3l/portfolio-reactjs-3d",
  },
  {
    image: "/projects/cardapio.png",
    title: "Cardápio API: Gestão de Cardápio de Restaurante",
    description:
      "API RESTful desenvolvida com Spring Boot no backend e React no frontend, utilizando MySQL para armazenamento e TailwindCSS para estilização, focada na gestão eficiente de itens de cardápio.",
    details:
      "O Cardápio API Fullstack é uma aplicação completa com Spring Boot, React, MySQL e TailwindCSS, voltada para a gestão de cardápios de restaurante. Possui CRUD completo, interface responsiva, documentação automática com Swagger e testes com JUnit5. Totalmente containerizada com Docker, permite iniciar backend, frontend e banco de dados com um único comando, garantindo agilidade e confiabilidade no uso.",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-400 mx-auto mt-16 px-5 xl:px-2">
        {techCards.map((card, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(card)}
            className="rounded-[10px] shadow-xl h-full object-cover overflow-hidden flex flex-col cursor-pointer transform transition duration-300 bg-[#0E0E0E] hover:scale-[1.03]"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 shadow-lg object-cover"
            />
            <div className="p-3 flex flex-col flex-1 text-white">
              <h5 className="font-bold text-md mb-3">{card.title}</h5>
              <p className="text-sm text-[#D5D8EA]">{card.description}</p>
            </div>
            <div className="flex justify-center items-center gap-2 px-5 pb-5 mt-auto">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60 backdrop-blur-sm px-4 rounded-2xl">
          <div className="max-w-2xl lg:max-w-3xl w-full rounded-lg p-4 text-white relative shadow-2xl animate-fade-in animate-glow bg-[#0D0907]">
            {/* Botão para fechar */}
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-[2px] right-[-2px] text-white rounded-full p-1 transition cursor-pointer text-sm"
            >
              <X size={15} />
            </button>

            {/* Conteudo */}
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-full h-38 mt-2 md:h-80 lg:w-[80%] lg:h-70 lg:mx-auto lg:mt-5 object-cover rounded-[5px] shadow-md shadow-white/20"
            />
            <h3 className="mt-6 mb-2 font-bold text-md lg:px-8">
              {selectedCard.title}
            </h3>
            <p className="text-sm p-selectedCard mb-4 lg:px-8">
              {selectedCard.details}
            </p>

            <div className="flex flex-wrap justify-center items-center gap-2 mb-4 xl:mb-9 mt-auto">
              {selectedCard.technologies.map((tech, idx) => (
                <img
                  key={idx}
                  src={techIcons[tech]}
                  alt={tech}
                  title={tech}
                  className="w-6 h-6 md:w-7 lg:h-7 transform transition duration-300 hover:scale-[1.05] cursor-pointer"
                />
              ))}
            </div>

            <div>
              {selectedCard.link && (
                <div className="flex justify-center items-center gap-4">
                  <a
                    href={selectedCard.link}
                    class="relative bottom-0 flex justify-center items-center gap-2 border border-[#000] rounded-xl text-[#FFF] font-black bg-[#000] uppercase px-3 md:px-8 py-4 z-10 overflow-hidden ease-in-out duration-700 group hover:text-[#000] hover:bg-[#FFF] active:scale-95 active:duration-0 focus:bg-[#FFF] focus:text-[#000] isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700"
                  >
                    <span class="truncate eaes-in-out duration-300 group-active:-translate-x-96 group-focus:translate-x-96 text-sm">
                      Testar Aplicação
                    </span>
                    <div class="absolute flex flex-row justify-center items-center gap-2 -translate-x-96 eaes-in-out duration-300 group-active:translate-x-0 group-focus:translate-x-0">
                      <div class="animate-spin size-4 border-2 border-[#000] border-t-transparent rounded-full"></div>
                      Processing...
                    </div>
                    <svg
                      class="fill-[#FFF] group-hover:fill-[#000] group-hover:-translate-x-0 group-active:translate-x-96 group-active:duration-0 group-focus:translate-x-96 group-focus:fill-[#000] ease-in-out duration-700"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"></path>
                    </svg>
                  </a>

                  <a
                    href={selectedCard.repository}
                    class="cursor-pointer flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                  >
                    <span class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                    <div class="flex items-center">
                      <svg
                        class="w-4 h-4 fill-current"
                        viewBox="0 0 438.549 438.549"
                      >
                        <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
                      </svg>
                      <span class="ml-2 text-white">Explorar código</span>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TechCard;
