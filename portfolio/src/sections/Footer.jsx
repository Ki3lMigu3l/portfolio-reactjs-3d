import React from "react";
import logo from "../../public/assets/logo.png";

const Footer = () => {
  return (
    <footer
      class="flex p-4 bg-transparent md:p-8 lg:p-10"
      style={{ boxShadow: "0 -4px 6px -1px rgba(255, 255, 255, 0.1)" }}
    >
      <div class="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          class="flex justify-center items-center text-lg font-semibold text-white"
        >
          <img
            className="w-7 h-7 rounded-full overflow-hidden shadow-lg mr-3"
            src={logo}
            alt="logo ezcoder"
          />
          Ezcoder
        </a>
        <p class="my-6 text-neutral-200">
          Projetos autorais focados em experiência do usuário, código limpo e
          soluções escaláveis para web.
        </p>
        <ul class="flex flex-wrap justify-center items-center mb-6 text-white">
          <li>
            <a
              href="#"
              class="text-neutral-400 hover:text-neutral-200 mr-4 hover:underline md:mr-6 "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-neutral-400 hover:text-neutral-200 mr-4 hover:underline md:mr-6"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-neutral-400 hover:text-neutral-200 mr-4 hover:underline md:mr-6"
            >
              Contact
            </a>
          </li>
        </ul>

        <div class="w-full mx-auto max-w-screen-md p-4 md:flex md:items-center md:justify-center">
          <span class="text-sm text-neutral-400 hover:text-neutral-200 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a href="#" class="hover:underline">
              Ezequiel Miguel
            </a>
            . All Rights Reserved.
          </span>
        </div>
        {/* <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="#" class="hover:underline">
            Ezequiel Miguel™
          </a>
          . All Rights Reserved.
        </span> */}

        <footer class="flex items-center bg-transparent max-w-4xl rounded-lg shadow-sm "></footer>
      </div>
    </footer>
  );
};

export default Footer;
