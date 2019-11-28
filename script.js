//5 questions with choices and answers
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "Arrays in Java Script can be used to store __________.",
        choices: ["numbers and strings", "other arrays", "alerts", "numbers"],
        answer: "alerts"
      },
      {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
      {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      }
  ];
  

//Global variables for managing the time, keeping track of the events, storing the scores and displaying the questions to the user
var timeEl = document.querySelector("#time");
var highScore = document.querySelector("#highScores");
var startQ = document.querySelector(".startQuiz");
var question = document.querySelector(".block");
var secondsLeft = 75;//setting the total time to 75 seconds
var index = 0;
var interval;
var scored = 0;
var UserNames = [];
var UserScores = [];
var storeButton = document.createElement("button");
var clearButton = document.createElement("button");
var displayButton = document.createElement("button");

//var storednames;
//var storedscores;


//var pTag =document.createElement("h2");
timeEl.textContent = "Time: " + secondsLeft+" Sec";
highScore.textContent = "View High Scores";
function renderLastRegistered() {
  var nameUser = JSON.parse(localStorage.getItem("name"));
  var scoreOfUser = JSON.parse(localStorage.getItem("Scores"));
  //appending the local storage items on the page
  question.appendChild(nameUser);
  question.appendChild(document.createElement("br"));
  question.appendChild(scoreOfUser);

  //alert("Name is "+nameUser+"  High Score is "+ ScoreUser);
}
highScore.addEventListener("click", function(){
  renderTodos();
    
});
var timeQE,timeQS, timeQ;
var ans;
var answered = false;

function quiz(index){
  answered = false;
   timeQS = secondsLeft;
  if(index<questions.length){
      question.innerHTML = "";  
      timeEl.textContent = "Time: " + secondsLeft+" Sec";
      highScore.textContent = "View High Scores";
      var questionPart = document.createElement("h1");  
      questionPart.textContent = questions[index].title;
      question.appendChild(questionPart);
      
      
      
      for(var i =0; i<questions[index].choices.length; i++){
        ans= document.createElement("button");
        ans.innerText = questions[index].choices[i];
        question.appendChild(ans);        
        question.appendChild(document.createElement("br"));        
        ans.addEventListener("click", function(){
          timeQE = secondsLeft;
          timeQ = timeQS-timeQE;
          var correctAns = questions[index].answer;
          var answ = ans.innerText;
          var pTag =document.createElement("h3");
          if(event.target.innerText=== correctAns){
            answered = true;
            pTag.textContent = "Correct";   
            question.appendChild(document.createElement("br"));
            question.appendChild(pTag);           
            //alert(answered);
            if(answered===true && timeQ < 10){
              scored = scored + 10;
              
            }
            else if (answered === true){
              scored = scored+5;
              pTag.textContent = "Correct";
              question.appendChild(document.createElement("br"));
              question.appendChild(pTag);
            }
            
            
          }
          else {
            secondsLeft = secondsLeft-15;
            //alert(secondsLeft);
            pTag.textContent = "Wrong";
            question.appendChild(document.createElement("br"));
            question.appendChild(pTag);
          }
          index++;
          quiz(index);   
          
        });        
        
      }
      
    }
      
              
   
  if(index===questions.length || secondsLeft===0){
    displayScore(scored);
  }
}


function storeTodos() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("name", JSON.stringify(UserNames));
  localStorage.setItem("scores", JSON.stringify(UserScores));  
}

function renderTodos(){
  
   
for(i=0;i<UserNames.length;i++){
  var storednames = document.createElement("h3");
  var storedscores = document.createElement("h3");
  
  storednames.textContent = JSON.parse(localStorage.getItem("name"));
  storedscores.textContent= JSON.parse(localStorage.getItem("scores"));
  
  question.innerText = "";
 question.appendChild(storednames);
 question.appendChild(storedscores);

}
}

function displayScore(scored){
  
  var initials = document.createElement("h4");
  question.innerHTML="";
  initials.textContent = "Enter your initials";
  question.appendChild(initials);
  var initialsText = document.createElement("textarea");
  question.appendChild(initialsText);
  var buttonSubmit = document.createElement("button")
  buttonSubmit.innerText = "Submit";
  question.appendChild(document.createElement("br"));
  question.appendChild(buttonSubmit);
  buttonSubmit.addEventListener("click",function(event){
  event.preventDefault();
  var nameU = document.querySelector("textarea").value.trim();
  if(nameU!==""){
    UserNames.push(nameU);
    UserScores.push(scored);
    storeButton.innerHTML = "Store Score";
    clearButton.innerHTML = "Clear Score";
    displayButton.innerHTML = "Display Score";
    question.innerText = "";
    question.appendChild(displayButton);
    displayButton.addEventListener("click",function(){
      var n = document.createElement("h3");
      var s = document.createElement("h3");
      n.textContent = nameU;
      s.textContent = scored;
      question.innerText = "";
      question.appendChild(n);
      question.appendChild(s);
      var userConfirmation =document.createElement("h2");
      userConfirmation.textContent = "Do you want to store the name and score to the local storage?"
      question.appendChild(storeButton);
      question.appendChild(clearButton);
      storeButton.addEventListener("click",function(){
        event.preventDefault();
        storeTodos();

      });
      clearButton.addEventListener("click",function(){
        event.preventDefault();
        localStorage.clear();//clear local storage
      });
    


    });
       
  }
 
  });
  

  
  }




startQ.addEventListener("click", function(){
  interval = setInterval(function() {
    secondsLeft--;       
  }, 1000);
  quiz(index);
});





  
 

  
 




  
   



 







