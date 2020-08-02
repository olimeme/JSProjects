const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'
  || userInput === 'bomb')
    return userInput;
  else
    console.log('Error');
}

function getComputerChoice(){
  let num = Math.floor(Math.random() * 3);
  switch(num)
  {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
    default: return;
  }
}

function determineWinner(userChoice, computerChoice)
{
  if(userChoice === computerChoice)
  {
    return 'TIE!';
  }
  else if(userChoice === 'rock')
  {
    if(computerChoice === 'scissors')
      return 'User WON!';
    else return 'Computer WON!';
  }
  else if(userChoice === 'paper')
  {
    if(computerChoice === 'rock')
      return 'User WON!';
    else return 'Computer WON!';
  }
  else if(userChoice === 'scissors')
  {
    if(computerChoice === 'paper')
      return 'User WON!';
    else return 'Computer WON!';
  }
  else if(userChoice === 'bomb')
    return 'User WON by dropping Hiroshima on computer!';
}

function playGame(){
  let userChoice = getUserChoice('bomb');
  let cumputerChoice = getComputerChoice();
  console.log('User: ' + userChoice);
  console.log('Computer: ' + cumputerChoice);
  console.log(determineWinner(userChoice,cumputerChoice));
}

playGame();
