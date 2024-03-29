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
