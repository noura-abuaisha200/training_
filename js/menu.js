function myFunction() {
    document.getElementById("mymenu").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.menu-shap')) {
      var dropdowns = document.getElementsByClassName("menu-item");
      var i;
      for (i = 0; i < menu.length; i++) {
        var openMenu = menu[i];
        if (openMenu.classList.contains('show')) {
          openMenu.classList.remove('show');
        }
      }
    }
  }