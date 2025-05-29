import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "InforNetwork",
    role: "Analista de Redes | NOC/SOC",
    location: "Caruaru, PE · Presencial",
    startDate: "Jan 2025",
    endDate: "Abr 2025",
    highlights: [
      "➜ Realizo o monitoramento contínuo de redes em ambientes MSP, garantindo performance, disponibilidade e segurança.",
      "➜ Administro e configuro dispositivos de rede como roteadores, MikroTik (RouterOS), switches gerenciáveis e firewalls dedicados, aplicando VPNs, ACLs e regras de firewall para controle de tráfego e mitigação de ameaças.",
      "➜ Automatizo processos usando Power Automate, integrando alertas personalizados com sistemas de tickets, reduzindo em 30% o tempo médio de resposta a incidentes.",
      "➜ Desenvolvi e mantive dashboards de monitoramento com Zabbix e Grafana, criando triggers, templates.",
      "Soluciono falhas de conectividade em redes cabeadas e Wi-Fi.",
      "➜ Participo do ciclo completo de novos projetos de rede, levantamento de requisitos, documentação técnica, implantação e testes.",
      "➜ Criação, correção e otimização de páginas WordPress com foco em SEO, performance e responsividade (projetos internos e de clientes).",
    ],
  },
  {
    company: "Digital Tecnologia",
    role: "Analista de Redes e Sistemas | NOC",
    location: "Belo Jardim, PE · Híbrido",
    startDate: "Abr 2024",
    endDate: "Jan 2025",
    highlights: [
      "➜ Especializado em tecnologias MikroTik, com experiência prática em configuração avançada, otimização de desempenho e troubleshooting de dispositivos com RouterOS em ambientes de missão crítica.",
      "➜ Liderança no desenvolvimento de uma aplicação Full Stack interno, projetado para automatizar rotinas operacionais e reduzir retrabalho, com tecnologias como Java, Spring Boot, Angular e MySQL.",
      "➜ Criação de pipelines automatizados utilizando Docker e Gitea CI/CD, promovendo entregas contínuas e testes integrados, reduzindo o tempo de deploy em mais de 40%.",
    ],
  },
  {
    company: "Digital Tecnologia",
    role: "Assistente de Redes | Suporte Técnico",
    location: "Belo Jardim, PE",
    startDate: "Set 2022",
    endDate: "Abr 2024",
    highlights: [
      "➜ Realizei atendimento de suporte técnico Nível 1, solucionando problemas de conectividade, autenticação e desempenho de rede para clientes residenciais e empresariais.",
      "➜ Analisei e ajustei configurações de roteadores e access points, melhorando a estabilidade do sinal Wi-Fi e ampliando a cobertura em mais de 30% dos chamados atendidos.",
      "➜ Gerenciei e categorizei chamados técnicos por meio de CRM integrado a ERP proprietário, assegurando rastreabilidade completa e priorização das demandas.",
      "➜ Coordenei fluxos de atendimento técnico, garantindo cumprimento dos SLAs com taxa de resolução dentro do prazo acima de 95%.",
    ],
  },
];

const titleVariant = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const markerVariant = {
  hidden: { opacity: 0, scale: 0.6 },
  show: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

const cardVariant = (isLeft) => ({
  hidden: { opacity: 0, x: isLeft ? -100 : 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 20 },
  },
});

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-36 px-4 text-white">
      <section className="my-30 py-0 px-1 text-white overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            variants={titleVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center text-3xl sm:text-4xl text-white mb-3"
          >
            Experiência Profissional
          </motion.h2>

          <div className="relative max-w-7xl mx-auto px-4 lg:px-6 z-20 py-24">
            {/* Linha vertical central */}
            <div className="absolute left-1/2 top-0 w-[2px] h-500 md:h-350 lg:h-380 xl:h-360 bg-gradient-to-b from-[#D5D8EA] to-[#444] transform -translate-x-1/2 z-0" />

            {/* Marcador central */}
            <motion.span
              custom={0}
              variants={markerVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute hidden lg:block top-100 xl:top-100 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-tr from-[#BEC1CF] to-[#D5D8EA] border-4 border-gray-900 rounded-full z-20 shadow-md"
            />
            <motion.span
              custom={1}
              variants={markerVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute hidden lg:block top-246 xl:top-240 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-tr from-[#BEC1CF] to-[#D5D8EA] border-4 border-gray-900 rounded-full z-20 shadow-md"
            />
            <motion.span
              custom={2}
              variants={markerVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute hidden lg:block top-377 xl:top-355 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-tr from-[#BEC1CF] to-[#D5D8EA] border-4 border-gray-900 rounded-full z-20 shadow-md"
            />

            {/* Lista de experiências */}
            <div className="flex flex-col space-y-14 relative z-10">
              {experiences.map((exp, i) => {
                const isLeft = i % 2 === 0;

                return (
                  <div
                    key={i}
                    className={`relative z-20 flex w-full ${
                      isLeft ? "justify-start" : "justify-end"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.15,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 60,
                      }}
                      className="backdrop-blur-md relative z-20"
                    >
                      {/* Card */}
                      <div className="w-full md:max-w-xl lg:max-w-md xl:max-w-130 px-4 py-6 lg:px-3 lg:py-5 bg-black/2 border-2 border-[#ffffff20] rounded-2xl shadow-xl backdrop-blur-md transition-transform duration-500 hover:scale-[1.02] cursor-pointer">
                        <div className="flex flex-col items-center justify-between mb-4">
                          <h3 className="text-md font-semibold text-center text-white">
                            {exp.role}
                          </h3>
                          <span className="flex items-center text-sm text-gray-400">
                            <Calendar size={15} className="mr-1" />
                            {exp.startDate} – {exp.endDate}
                          </span>
                        </div>

                        <div className="flex flex-col items-center text-sm text-gray-300 mb-8 gap-1">
                          <strong className="flex flex-row items-center">
                            <Briefcase size={15} className="mr-1" />
                            {exp.company}
                          </strong>
                          <span className="flex flex-row items-center">
                            <MapPin size={15} className="ml-2 mr-1" />
                            {exp.location}
                          </span>
                        </div>

                        <ul className="list-disc list-inside space-y-4 text-sm text-gray-200 pl-1 md:pl-2">
                          {exp.highlights.map((item, idx) => (
                            <motion.li
                              key={idx}
                              whileHover={{ scale: 1.03 }}
                              className="transition-all duration-500 list-none"
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
