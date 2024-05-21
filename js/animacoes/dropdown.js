export default function initDropdown() {
   
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');


  dropdownMenus.forEach(menu=>{
    ['click','touchstart'].forEach(userEvent=>{
      menu.addEventListener(userEvent,handleClick);
    })
  })

  function handleClick(event){
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ()=>{
      this.classList.remove('active');
    })
  }
  }

  function outsideClick(element, callback){
    const html = document.documentElement;
    html.addEventListener('click', handleClickOutside);
   
    function  handleClickOutside(event){
      if(!element.contains(event.target)){
        html.removeEventListener('click',handleClickOutside);
        callback()
      }
    }
    
  }
  




