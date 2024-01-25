export function showDataAccordian(id){
    let question = document.getElementById(id)
   let icon = question.querySelector(".icon-shape");
   const active = document.querySelector(".faq_question.active_acc");
   const activeIcon = document.querySelector(".icon-shape.active_acc");

   if (active && active !== question) {
     active.classList.toggle("active_acc");
     activeIcon.classList.toggle("active_acc");
     active.nextElementSibling.style.maxHeight = 0;
   }

   question.classList.toggle("active_acc");
   icon.classList.toggle("active_acc");

   const answer = question.nextElementSibling;

   if (question.classList.contains("active_acc")) {
     answer.style.maxHeight = answer.scrollHeight + "px";
   } else {
     answer.style.maxHeight = 0;
   }
 }