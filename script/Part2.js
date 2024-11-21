let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScore()



function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if(playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        }
        else if (computerMove === 'paper') {
            result = 'You lose!';
        }
        else if (computerMove === 'scissors') {
            result = 'You win!';
        }
    }
    else if(playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win!';
        }
        else if (computerMove === 'paper') {
            result = 'Tie.';
        }
        else if (computerMove === 'scissors') {
            result = 'You lose!';
        }
    }
    else if(playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose!';
        }
        else if (computerMove === 'paper') {
            result = 'You win!';
        }
        else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    }

    if(result === 'You win!') {
        score.wins++
    }
    else if(result === 'You lose!') {
        score.losses++
    }
    else if(result === 'Tie.') {
        score.ties++
    }

    localStorage.setItem('score', JSON.stringify(score))

    updateScore()

    document.querySelector('.result').innerHTML = result;
    document.querySelector('.moves').innerHTML = ` You
    <img src="imagesF/${playerMove}-emoji.png" class="move-result">
    <img src="imagesF/${computerMove}-emoji.png" class="move-result">
    Computer`
}

function updateScore() {
    document.querySelector('.allScore').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randNum = Math.random();
    let computerMove = '';

    if (randNum >= 0 && randNum < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randNum >= 1 / 3 && randNum < 2 / 3) {
        computerMove = 'paper';
    }
    else if (randNum >= 2 / 3 && randNum < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}

function resCore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScore()
}
 