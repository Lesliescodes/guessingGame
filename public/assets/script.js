  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let guess = inputElement.value;
  let attempts = 10;

  function checkGuess() {
 const inputElement = document.getElementById('guess');
  const feedbackElement = document.getElementById('feedback');
  const guess = inputElement.value;
    if (guess == randomNumber) {
        feedbackElement.innerHTML = 'Congratulations! You have successfully guessed the number!';
        feedbackElement.style.color = 'green';  
    } else if (guess < randomNumber) { 
        feedbackElement.innerHTML = 'Too Low! Try again'; }
        else{
            feedbackElement.innerHTML = 'Too High! Try again'; 
            feedbackElement.style.color = 'red'; }
        
        }
        