# Web APIs: Code Quiz

As a web developer, I will probably be asked to complete a coding assessment. These assessments are typically a combination of multiple-choice questions and interactive challenges. So, I want to build a code quiz with multiple-choice questions.


## Instructions

From scratch, I have built a timer-based quiz application using JavaScript fundamentals that stores high scores client-side with which you can gauge your progress compared to your peers.

Here are some instructions for interpretation:

  * The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

  * Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

  * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

  * When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.

* This application is responsive, ensuring that it adapts to multiple screen sizes.

* Refer to the animated GIF below for a demonstration of the application functionality.

![code quiz](./Assets/images/Web-APIs-demo.gif)


## Guidelines

* The first view of the application displays a button that starts the quiz.

* Clicking the start button displays a series of questions.

* Once the quiz begins, a timer starts.

* If a question is answered incorrectly, additional time is subtracted from the timer.

* The timer stops when all questions have been answered or the timer reaches 0.

* After the game ends, the user can save their initials and score to a highscores view using local storage.

