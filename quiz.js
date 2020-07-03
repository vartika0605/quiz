window.onload = function(){
show(0);

}

let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  }
];
var i;
let points=0;
function show(i){


  document.getElementById("questions").innerHTML=`
  <h2 class="pl-5">Q${i+1}.${questions[i].question}</h2>
  <ul>
    <li class="option">${questions[i].options[0]}</li>
    <li class="option">${questions[i].options[1]}</li>
    <li class="option">${questions[i].options[2]}</li>
    <li class="option">${questions[i].options[3]}</li>
    </ul>`;
    toggleActive();
}
let count=1;
function nextQues(){

  let result = document.querySelector(".active").innerHTML;

  if (result==questions[count-1].answer) {
    points +=10;
    console.log(points);
  }
  sessionStorage.setItem("respoints",points);

  if(count==questions.length)
  {
  location.href="end.html";
  }

  show(count);

  count++;

}
function toggleActive(){
  let option = document.querySelectorAll("li.option");

 for(let j=0;j<option.length;j++)
 {
     option[j].onclick= function (){
     for(let k=0 ; k<option.length; k++)
     {
    if(option[k].classList.contains("active"))
    {
      option[k].classList.remove("active");
    }
  }
  option[j].classList.add("active");
}
}
}
const startingmin = 5;
let totalsec = startingmin*60;
setInterval(updatetime,1000);
function updatetime(){

  let min = Math.floor(totalsec/60);
  let sec= totalsec%60;
  sec = sec<10 ?'0'+sec : sec;
  document.getElementById("timer").innerHTML=`<h2>0${min}:${sec}</h2>`;
  totalsec--;
}
