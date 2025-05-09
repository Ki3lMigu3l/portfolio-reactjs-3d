import TechCard from "../components/TechCard";

const Projects = () => {
  return (
    <section className="mb-30 sm:px-10 px-5" id="work">
      <div className="mt-10 fixed inset-0 -z-10 animate-gradient bg-gradient-to-r from-[#00000041] via-[#1a1a1a98] to-[#0000008d] bg-[length:200%_200%]"></div>

      <h4 className="text-center xl:text-2xl md:text-2xl sm:text-xl text-2xl font-semibold bg-gradient-to-r from-[#bec1cf] from-60% via-[#D5D8EA] via-60% to-[#d5d8ea] to-100% bg-clip-text text-transparent mb-10">
        Projects
      </h4>

      <TechCard />
    </section>
  );
};

export default Projects;
