const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const questionEl = document.getElementById("question")
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score")
const warningEl = document.getElementById("warning")

const formEl = document.getElementById("form");
questionEl.innerText =`What is ${num1} multiply by ${num2}`;

let score = +localStorage.getItem("score");
const correctAns = num1 * num2;

if (!score){
    score = 0;
}else if(score < 0){
    score = 0
    scoreEl.style.color = "red"
    warningEl.innerText = `Please try again !`
    warningEl.style.color = "red"
    warningEl.style.fontWeight = "bold"
}


scoreEl.innerText = `score = ${score}`

formEl.addEventListener("submit",()=>{
    const userAns = +inputEl.value;
    if (correctAns === userAns ) {
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    };
    console.log(score)
} )
function updateLocalStorage(){
    localStorage.setItem("score" , JSON.stringify(score))
}