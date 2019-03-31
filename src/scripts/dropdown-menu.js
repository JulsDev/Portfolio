(function(){
  const header = document.querySelector('.header');
  const headerHeight = 108;

  window.addEventListener("scroll", function(event){
    event.preventDefault();

    const scrollTop = window.pageYOffset;

    if(scrollTop >= headerHeight){
      header.classList.add('header-dropdown');
    }else{
      header.classList.remove('header-dropdown');
    }
  })
})();