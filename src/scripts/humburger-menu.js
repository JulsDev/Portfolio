(function(){
    const menu = document.querySelector(".humburger-menu");
    const menuPopup = document.querySelector(".humburger-menu-popup");
    const menuClose = document.querySelector(".humburger-menu-popup--close");

    menu.addEventListener("click", function(event){
      event.preventDefault();
      menuPopup.classList.add("humburger-menu-popup--opened");
    });

    menuClose.addEventListener("click", function(event){
      event.preventDefault();
      menuPopup.classList.remove("humburger-menu-popup--opened");
    });
})();