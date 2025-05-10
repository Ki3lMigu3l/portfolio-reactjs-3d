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

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 60,
    },
  }),
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="my-30 py-0 px-1 text-white scroll-mt-30 md:scroll-mt-35"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl text-white mb-3">
          Experiência Profissional
        </h2>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-24">
          {/* Linha vertical central */}
          <div className="absolute left-1/2 top-0 w-[2px] h-268 lg:h-250 xl:h-230 bg-gradient-to-b from-[#D5D8EA] to-[#444] transform -translate-x-1/2 z-0" />

          {/* Marcador central */}
          <span className="absolute hidden lg:block top-65 xl:top-60 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-tr from-[#BEC1CF] to-[#D5D8EA] border-4 border-gray-900 rounded-full z-20 shadow-md" />

          <span className="absolute hidden lg:block top-160 xl:top-150 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-tr from-[#BEC1CF] to-[#D5D8EA] border-4 border-gray-900 rounded-full z-20 shadow-md" />

          <span className="absolute hidden lg:block top-247 xl:top-230 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-tr from-[#BEC1CF] to-[#D5D8EA] border-4 border-gray-900 rounded-full z-20 shadow-md" />

          <div className="flex flex-col space-y-14 relative z-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: i * 0.15,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 60,
                      },
                    },
                  }}
                  className={`relative flex w-full ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Card */}
                  <div className="w-full md:max-w-xl  lg:max-w-md xl:max-w-130 px-4 py-6 lg:px-3 lg:py-5 bg-white/5 border border-gray-600 rounded-2xl shadow-xl backdrop-blur-md transition-transform duration-500 hover:scale-[1.02] cursor-pointer">
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
