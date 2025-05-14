import about from "/assets/about.jpg";

const About = () => {
  return (
    <section
      className="mb-20 sm:px-10 px-5 
      scroll-mt-23 md:scroll-mt-25 xl:scroll-mt-35"
      id="about"
    >
      <div
        // className="about"
        className="bg-[#000] border-[2px] border-[#ffffff20] rounded-[9px] shadow-xl overflow-hidden mx-auto flex flex-col lg:flex-row xl:max-w-6xl items-center "
      >
        {/* imagem */}
        <div className="w-full h-67 p-2 md:h-95 lg:w-[60%] lg:h-157 lg:px-2 2xl:w-[50%] 2xl:p-9  xl:w-2/3 xl:h-full">
          <img
            src={about}
            alt="ezequiel miguel"
            className="w-full h-full rounded-[9px] object-cover md:object-[center_30%] lg:object-[center_30%] xl:object-cover"
          />
        </div>
        {/* texto */}
        <div className="w-full gap-5 flex flex-col items-center justify-center text-white text-center">
          <h4 className="text-center xl:text-2xl md:text-2xl sm:text-xl text-2xl font-semibold bg-gradient-to-r from-[#bec1cf] from-60% via-[#D5D8EA] via-60% to-[#d5d8ea] to-100% bg-clip-text text-transparent mt-3 xl:mt-10">
            About me
          </h4>

          <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#BEC1CF] via-[#D5D8EA] to-[#D5D8EA] px-3 sm:px-6 md:px-5 mx-auto max-w-3xl sm:max-w-4xl md:text-md">
            Sou Desenvolvedor Full Stack, tenho 21 anos e estou finalizando a
            graduação em Análise e Desenvolvimento de Sistemas. Atuo no
            desenvolvimento de aplicações completas, do backend ao frontend,
            utilizando tecnologias como Java, Spring Framework, APIs RESTful,
            Angular, React.js e Next.js.
          </p>

          <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#BEC1CF] via-[#D5D8EA] to-[#D5D8EA] px-3 sm:px-6 md:px-5 mx-auto max-w-3xl sm:max-w-4xl md:text-md">
            Tenho experiência prática com SQL, versionamento com Git, CI/CD
            (GitLab, Gitea, Jenkins), conteinerização com Docker e bancos de
            dados relacionais (MySQL, PostgreSQL) e NoSQL (MongoDB). Também
            aplico práticas DevOps e utilizo ferramentas como Zabbix e Grafana
            para garantir performance e estabilidade em produção.
          </p>

          <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#BEC1CF] via-[#D5D8EA] to-[#D5D8EA] px-3 sm:px-6 md:px-5 mx-auto max-w-3xl sm:max-w-4xl md:text-md">
            Tenho buscado me aprofundar em arquitetura de microsserviços, AWS,
            Terraform, Kubernetes e padrões de projeto (Design Patterns),
            alinhando esses estudos com minha atuação prática para construir
            soluções escaláveis e robustas.
          </p>

          <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#BEC1CF] via-[#D5D8EA] to-[#D5D8EA] px-3 sm:px-6 md:px-5 mx-auto max-w-3xl sm:max-w-4xl md:text-md mb-5">
            Atualmente, aprofundo meus conhecimentos em arquitetura de
            microsserviços, AWS, Terraform, Kubernetes e Design Patterns, com
            foco em construir soluções escaláveis e robustas. Estou cursando o
            programa Executive da United Idiomas para alcançar fluência em
            inglês e ampliar meu alcance profissional. Busco constantemente
            evoluir, aprimorando tanto minhas habilidades técnicas quanto
            comunicativas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
