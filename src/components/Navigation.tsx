import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="absolute top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
    >
      <div className="container mx-auto px-4 py-4 flex justify-end items-center">
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-white hover:bg-primary hover:text-white px-6 py-3 rounded-full transition-all duration-300"
            >
              Serviços
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-white hover:bg-primary hover:text-white px-6 py-3 rounded-full transition-all duration-300"
            >
              Sobre
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-white hover:bg-primary hover:text-white px-6 py-3 rounded-full transition-all duration-300"
            >
              Galeria
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contato")}
              className="bg-primary text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-primary/90"
            >
              Contato
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
