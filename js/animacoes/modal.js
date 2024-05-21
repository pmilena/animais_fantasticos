export default function initModal() {
  const botaoAbrir = document.querySelector("[data-modal='abrir']");
  const botaoFechar = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");

  if(botaoAbrir && botaoFechar && containerModal){

  function toggleModal(event){
    event.preventDefault();
    containerModal.classList.toggle('ativo')
  }

  function clicarFora(event){
    if(event.target===this){
      containerModal.classList.remove('ativo')
    }
  }


botaoAbrir.addEventListener('click', toggleModal);
botaoFechar.addEventListener('click', toggleModal);
containerModal.addEventListener('click', clicarFora);
  }

}
