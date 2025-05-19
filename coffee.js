var menuOpenButton=document.querySelector("menu-open-button");
var menuCloseButton=document.querySelector("menu-close-button");


menuOpenButton.addEventListener("click",() => {
  
  document.body.classList.toggle("show-mobail-menu")
})
  
  
  menuCloseButton.addEventListener("click",() => menuOpenButton.click()
  )
  
  

