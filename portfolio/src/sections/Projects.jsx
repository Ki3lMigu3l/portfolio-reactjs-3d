import TechCard from "../components/TechCard";
import { motion } from "framer-motion";

const titleVariant = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  return (
    <section
      className="mb-60 scroll-mt-23 md:scroll-mt-30 2xl:scroll-mt-50"
      id="work"
    >
      <motion.h2
        variants={titleVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center text-3xl sm:text-4xl text-white mb-20"
      >
        Projetos
      </motion.h2>
      <TechCard />
    </section>
  );
};

export default Projects;
