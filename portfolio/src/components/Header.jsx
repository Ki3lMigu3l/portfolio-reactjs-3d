// components/AnimatedHeader.jsx
import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import perfil from "/assets/perfil.JPG";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  //   intro Text
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["FullStack Developer!", "Network Analyst NOC/SOC!"];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[index];
      if (isDeleting) {
        setText((prev) => prev.slice(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setText((prev) => currentRole.slice(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, typingSpeed]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `/js/finisher-header.es5.min.js`;
    script.async = true;

    script.onload = () => {
      new window.FinisherHeader({
        count: 46,
        size: { min: 2, max: 8, pulse: 0 },
        speed: {
          x: { min: 0, max: 0.4 },
          y: { min: 0, max: 0.6 },
        },
        colors: {
          background: "#0d0d0d",
          particles: ["#ff926b", "#87ddfe", "#acaaff", "#1bffc2", "#f9a5fe"],
        },
        blending: "lighten",
        opacity: { center: 1, edge: 0 },
        skew: 0,
        shapes: ["c"],
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <section className=" scroll-mt-45" id="home">
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center gap-4 px-4 sm:px-8 mt-25 md:mt-37 lg:mt-40">
        <h1 className="title text-4xl md:text-5xl xl:text-6xl text-white text-center ">
          Hi, i'm Ezequiel
        </h1>
        <img
          src={perfil}
          alt="perfil"
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full object-cover shadow-lg overflow-hidden animate-glow profile-floating"
        />

        <h2 className="headline sm:text-2xl text-xl font-medium text-white text-center font-generalsans">
          {text} <span className="text-lg floating-rocket"> 🚀</span>
        </h2>
        <div className="flex flex-row sm:flex-row items-center gap-4 sm:gap-8 mt-1 z-30">
          <button className="btn-linkedin transition-colors duration-500">
            <a
              href="https://www.linkedin.com/in/ezequielmiguel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#000] hover:text-white transition-colors duration-500"
            >
              <i className="fab fa-linkedin text-xl" />
              <span>LinkedIn</span>
            </a>
          </button>

          <a
            href="https://github.com/ki3lmigu3l"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-8 px-4 py-1 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-3 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
          >
            <i className="fab fa-github text-xl" />
            <span>GitHub</span>
          </a>
        </div>

        <h3 className="subtitle text-center xl:text-6xl md:text-5xl sm:text-3xl text-3xl text-white mt-14">
          Delivering Clean Architecture
        </h3>

        <p className="paragraph text-center px-3 sm:px-6 md:px-8 mx-auto max-w-3xl sm:max-w-4xl md:text-lg mb-30">
          Especialista em desenvolvimento de software com foco em arquitetura
          limpa, escalabilidade, performance e manutenibilidade.
        </p>
      </div>
    </section>
  );
};

export default Header;
