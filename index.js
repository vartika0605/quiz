function start(e){
  e.preventDefault();
let name = document.forms["welcome_form"]["welcome" ].value;
sessionStorage.setItem("name", name);
location.href="quiz.html";
}
