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
      "Monitoramento contínuo de redes MSP.",
      "Administração de dispositivos MikroTik, switches e firewalls.",
      "Automação com Power Automate e integração com sistemas de tickets.",
      "Dashboards com Zabbix e Grafana.",
      "Criação e otimização de páginas WordPress com foco em SEO.",
    ],
  },
  {
    company: "Digital Tecnologia",
    role: "Analista de Redes e Sistemas | NOC",
    location: "Belo Jardim, PE · Híbrido",
    startDate: "Abr 2024",
    endDate: "Jan 2025",
    highlights: [
      "Administração avançada de MikroTik RouterOS.",
      "Desenvolvimento de aplicação interna Full Stack (Spring, Angular, MySQL).",
      "CI/CD com Docker e Gitea, reduzindo o tempo de deploy em 40%.",
    ],
  },
  {
    company: "Digital Tecnologia",
    role: "Assistente de Redes | Suporte Técnico",
    location: "Belo Jardim, PE",
    startDate: "Set 2022",
    endDate: "Abr 2024",
    highlights: [
      "Suporte técnico Nível 1: conectividade, autenticação, desempenho.",
      "Otimização de redes Wi-Fi, com melhoria de cobertura em 30%.",
      "Gestão de chamados com CRM + ERP.",
      "Taxa de resolução dentro do prazo acima de 95%.",
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
            <div className="absolute left-1/2 top-0 w-[2px] h-275 md:h-250 lg:h-250 xl:h-230 bg-gradient-to-b from-[#D5D8EA] to-[#444] transform -translate-x-1/2 z-0" />

            {/* Marcador central */}
            <motion.span
              custom={0}
              variants={markerVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute hidden lg:block top-65 xl:top-60 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-tr from-[#BEC1CF] to-[#D5D8EA] border-4 border-gray-900 rounded-full z-20 shadow-md"
            />
            <motion.span
              custom={1}
              variants={markerVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute hidden lg:block top-160 xl:top-150 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-tr from-[#BEC1CF] to-[#D5D8EA] border-4 border-gray-900 rounded-full z-20 shadow-md"
            />
            <motion.span
              custom={2}
              variants={markerVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute hidden lg:block top-247 xl:top-230 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-tr from-[#BEC1CF] to-[#D5D8EA] border-4 border-gray-900 rounded-full z-20 shadow-md"
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

                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-200 pl-1 md:pl-2">
                          {exp.highlights.map((item, idx) => (
                            <motion.li
                              key={idx}
                              whileHover={{ scale: 1.03 }}
                              className="transition-all duration-500"
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
