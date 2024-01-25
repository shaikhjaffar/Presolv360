const  Reveal=()=> {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 30;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active_word");
      } else {
        reveals[i].classList.remove("active_word");
      }
    }
  }

export default Reveal
  