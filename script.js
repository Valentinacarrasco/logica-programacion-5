
const randomNumber = Math.floor(Math.random()*101)
let userNumbers = []

function numberGuess(){
    let userOption = document.getElementById('userGuess').value

    userOption = parseInt(userOption)

    if (userOption != randomNumber){
        userNumbers.push(userOption)
        document.getElementById('guessResults').innerHTML = '<div class="alert alert-danger" role="alert">Ups, ' + userNumbers[userNumbers.length-1] + ' is incorrect.<br>Try Again!</div>'
    }
    else{
        userNumbers.push(userOption)
        document.getElementById('guessResults').innerHTML ='<div class="alert alert-success" role="alert">Congratulations!<br>You Guessed The Secret Number! **' + randomNumber + '**<br>Your guesses were: '+ userNumbers.join(' - ') + '</div>'
    }
    document.getElementById('result').style.display = 'block'
    document.getElementById('userGuess').value = ''
}





