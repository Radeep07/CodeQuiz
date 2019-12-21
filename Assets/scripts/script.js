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
        answer: "numbers and strings"
      },
      {
        title: "Choose the client-side JavaScript object?",
        choices: ["Database", "Cursor", "Client", "FileUpLoad"],
        answer: "FileUpLoad"
      },
      {
        title: "The HTML5 specification includes",
        choices: ["Data storage", "Graphics APIs", "Other APIs for web apps", "All of the mentioned"],
        answer: "All of the mentioned"
      }
  ];
 
//Global variables for managing the time, keeping track of the events, storing the scores and displaying the questions to the user
var timeEl = document.querySelector("#time");
timeEl.style.backgroundColor = "red";
var highScore = document.querySelector("#highScores");
highScore.style.backgroundColor = "green";
var startQ = document.querySelector(".startQuiz");
startQ.style.backgroundColor = "brown";
startQ.style.color = "white";
var question = document.querySelector(".block");
question.style.backgroundColor = "beige";
var secondsLeft = 75;//setting the total time to 75 seconds
var index = 0;
var interval;
var scored = 0;
var UserNames = [];
var UserScores = [];
var storeButton = document.createElement("button");
var clearButton = document.createElement("button");
var displayButton = document.createElement("button");
//appending the local storage item on the page
var n=document.createElement("h3");
timeEl.textContent = "Time: " + secondsLeft+" Sec";
highScore.textContent = "View High Scores";
var nameUser = [];
var scoreOfUser = [];




//to render locally stored element to the page 
function renderLastRegistered() {
  question.innerHTML="";
  for(var i=0;i<localStorage.length;i++){
    n.textContent="Name: "+ JSON.parse(localStorage.getItem("name")) + "      Score: "+ JSON.parse(localStorage.getItem("scores"));
    question.appendChild(n);
    question.appendChild(document.createElement("br"));
  }
   
}

//when highScore button is clicked to display the store high scores
highScore.addEventListener("click", function(){
  renderLastRegistered();   
});


var timeQE,timeQS, timeQ;
var ans;
var answered = false;
//quiz start function
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
      //loop for all questions
      for(var i =0; i<questions[index].choices.length; i++){
        ans= document.createElement("button");
        ans.style.backgroundColor = "lightblue";
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
            pTag.textContent = "Wrong";
            question.appendChild(document.createElement("br"));
            question.appendChild(pTag);
          }
          index++;
          quiz(index);   
          
        });        
        
      }
      
    }
     
       
   
  if(index===questions.length || secondsLeft<=0){
    clearInterval(interval);
    displayScore(scored,secondsLeft);
  }
}

var namesArray=[];
var scoresArray=[];
function renderTodos(){
  storednames= JSON.parse(localStorage.getItem("name"));
  storedscores= JSON.parse(localStorage.getItem("scores")); 
  question.innerText = "";  
  for(i=0;i<storednames.length;i++){ 
  var stn = document.createElement("h3");
  var sts = document.createElement("h3"); 
  stn.textContent=storednames[i];
  sts.textContent=storedscores[i];
  question.appendChild(stn);
  question.appendChild(sts);

  }
}
var timeramining;
function displayScore(scored, timeleftover){
  timeramining=timeleftover;
  timeEl.textContent = "Time: " + timeramining+" Sec";  
  var initials = document.createElement("h4");
  question.innerHTML="";
  initials.textContent = "Enter your initials";
  question.appendChild(initials);
  var initialsText = document.createElement("textarea");
  question.appendChild(initialsText);
  var buttonSubmit = document.createElement("button");
  buttonSubmit.style.backgroundColor="brown";
  buttonSubmit.style.color="white";
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
    storeButton.style.backgroundColor="green";
    storeButton.style.color="white";
    clearButton.innerHTML = "Clear Score";
    clearButton.style.backgroundColor="blue";
    clearButton.style.color="white";
    displayButton.innerHTML = "Display Score";
    displayButton.style.backgroundColor="brown";
    displayButton.style.color="white";
    question.innerText = "";
    question.appendChild(displayButton);
    displayButton.addEventListener("click",function(){
      var n = document.createElement("h3");
      var s = document.createElement("h3");
      n.textContent = "Name: "+ nameU;
      s.textContent = "Score: " + scored;
      question.innerText = "";
      question.appendChild(n);
      question.appendChild(s);
      var userConfirmation =document.createElement("h2");
      userConfirmation.textContent = "Do you want to store the name and score to the local storage?"
      question.appendChild(storeButton);
      question.appendChild(clearButton);
      storeButton.addEventListener("click",function(){
        event.preventDefault();
        nameUser.push(nameU);
        scoreOfUser.push(scored);
        //storeTodos(nameUser,scoreOfUser);
        localStorage.setItem("name", JSON.stringify(nameUser));
        localStorage.setItem("scores", JSON.stringify(scoreOfUser));  

      });
      clearButton.addEventListener("click",function(){
        event.preventDefault();
        question.innerHTML="";
        localStorage.clear();//clear local storage
      });
    


    });
       
  }
 
  });
  

  
  }




startQ.addEventListener("click", function(){
  interval = setInterval(function() {
    secondsLeft--;  
    if(secondsLeft>=0){
      timeEl.textContent = "Time: " + secondsLeft+" Sec"; 
    }   

  }, 1000);
  quiz(index);
});





  
 

  
 




  
   



 







