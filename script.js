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
  


var timeEl = document.querySelector("#time");
var highScore = document.querySelector("#highScores");
var startQ = document.querySelector(".startQuiz");
var question = document.querySelector(".block");
var secondsLeft = 75;//setting the total time to 75 seconds
var index = 0;
var interval;
var scored = 0;

var pTag =document.createElement("h2");
timeEl.textContent = "Time: " + secondsLeft+" Sec";
highScore.textContent = "View High Scores";
function renderLastRegistered() {
  var nameUser = localStorage.getItem("name");
  var ScoreUser = localStorage.getItem("Scores");
  //question.innerHTML="";
  //question.appendChild(JSON.parse(nameUser));
  //question.appendChild(document.createElement("br"));
  //question.appendChild(JSON.parse(scoreseUser));

  alert("Name is "+nameUser+"  High Score is "+ ScoreUser);
}
highScore.addEventListener("click", function(){
  renderLastRegistered();
    
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
        //document.body.setAttribute(align, "center");      
        ans.addEventListener("click", function(){
          timeQE = secondsLeft;
          timeQ = timeQS-timeQE;
          var correctAns = questions[index].answer;
          var answ = ans.innerText;
          if(event.target.innerText=== correctAns){
            answered = true;
            pTag.innerText = "Correct";   
            question.appendChild(document.createElement("br"));
            question.appendChild(pTag);           
            //alert(answered);
            if(answered===true && timeQ < 10){
              scored = scored + 10;
              
            }
            else if (answered === true){
              scored = scored+5;
              pTag.innerText = "Correct";
              question.appendChild(document.createElement("br"));
           question.appendChild(pTag);
            }
            
            
          }
          else {
            secondsLeft = secondsLeft-15;
            //alert(secondsLeft);
            pTag.innerText = "Wrong";
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
  var nameU = document.querySelector("textarea").value;
  localStorage.setItem("name", nameU);  
  localStorage.setItem("Scores", scored);
  renderLastRegistered();
  
  });
  

  
  }




startQ.addEventListener("click", function(){
  interval = setInterval(function() {
    secondsLeft--;       
  }, 1000);
  quiz(index);
});





  
 

  
 




  
   



 







