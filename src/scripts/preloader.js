(function(){
  document.body.onload = function(){
    setTimeout(function(){
      var preloader = document.querySelector(".preloader");
      if(!preloader.classList.contains('active')){
        preloader.classList.add("active");
      }
    }, 2000);
  }

})();