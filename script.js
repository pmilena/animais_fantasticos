function initTabNav() {
  const img = document.querySelectorAll(".js-lista li");
  const content = document.querySelectorAll(".js-content section");

  if (img.length && content.length) {
    content[0].classList.add("ativo");

    function show(index) {
      content.forEach((section) => {
        section.classList.remove("ativo");
      });
      content[index].classList.add("ativo");
    }

    img.forEach((item, index) => {
      item.addEventListener("click", () => {
        show(index);
      });
    });
  }
}
initTabNav();

//Accordion List
function initAccordion() {
  const pergunta = document.querySelectorAll(".js-faq-lista dt");
  pergunta[0].classList.add("ativo");
  pergunta[0].nextElementSibling.classList.add("ativo");

  if (pergunta.length) {
    pergunta.forEach((item) => {
      const resposta = item.nextElementSibling;
      item.addEventListener("click", (answer) => {
        resposta.classList.toggle("ativo");
        item.classList.toggle("ativo");
      });
    });
  }
}
initAccordion();

//Scroll suave link interno
function initScroll() {
  const linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');

  if (linkInterno.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    linkInterno.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
initScroll();

//Animação scroll

function initScrollAnimation() {
  const sections = document.querySelectorAll(".js-scroll");
  sections[0].classList.add("ativo");

  if (sections.length) {
    const metadeTela = window.innerHeight * 0.6;
    function scrollAnimation() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - metadeTela;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }

    window.addEventListener("scroll", scrollAnimation);
  }
}
initScrollAnimation();
