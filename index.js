
const maxScore = 5;

let playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

const playerChoiceContainer = document.getElementById('playerImage');
const computerChoiceContainer = document.getElementById('pcImage')

playerChoiceContainer.classList.remove('winner');
computerChoiceContainer.classList.remove('winner');


function play(playerChoice) {
    document.getElementsByClassName('buttons')[0].style.display = 'none';
    document.getElementsByClassName('result')[0].style.display = 'block';
    document.getElementById('next').style.display = 'block';



    if (playerScore === (maxScore) || computerScore === (maxScore)) {

        document.getElementById('replay').style.display = 'block';
        document.getElementById('play-again').style.display = 'none';




    } else {
        localStorage.setItem('playerScore', playerScore);
        localStorage.setItem('computerScore', computerScore);
        document.getElementById('play-again').style.display = 'block';
    }

    if (playerScore <= computerScore) {
        document.getElementById('next').style.display = 'none';

    }


}

const gameContainer = document.querySelector('.container');


userResult = document.querySelector('.userImage img');
pcResult = document.querySelector('.computerImage img');

optionImages = document.querySelectorAll('.optionImage');
optionImages.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        image.classList.add('active');

        optionImages.forEach((image2, index2) => {

            index !== index2 && image.classList.remove('active');
        });
        let imagesrc = e.target.src;
        userResult.src = imagesrc


        let randomNumber = Math.floor(Math.random() * 3);
        let pcPicture = ['rock.png', 'paper.png', 'scissor.png'];
        pcResult.src = pcPicture[randomNumber]

        let cpuValues = ['R', 'P', 'S'][randomNumber];
        let uservalues = ['R', 'P', 'S'][index];

        if (uservalues === cpuValues) {

        } else if (
            (uservalues === 'R' && cpuValues === 'S') ||
            (uservalues === 'P' && cpuValues === 'R') ||
            (uservalues === 'S' && cpuValues === 'P')
        ) {
            playerScore++;
            playerChoiceContainer.classList.add('winner');
            computerChoiceContainer.classList.remove('winner');
            document.getElementById('your_score').textContent = playerScore;
            document.getElementById('against').innerHTML = 'You Win';


        }
        else {
            computerScore++;
            computerChoiceContainer.classList.add('winner');
            playerChoiceContainer.classList.remove('winner');

            document.getElementById('computer_score').textContent = computerScore;
            document.getElementById('against').innerHTML = 'computer Win';

        }
        if (playerScore === (maxScore) || computerScore === (maxScore)) {

            document.getElementById('replay').style.display = 'block';
            document.getElementById('play-again').style.display = 'none';
        }

        if (playerScore === maxScore && computerScore === maxScore) {
            document.getElementById('against').innerHTML = 'match tie';
        }
        if (uservalues === cpuValues) {
            document.getElementById('against').innerHTML = 'DRAW';

            playerChoiceContainer.classList.remove('winner');
            computerChoiceContainer.classList.remove('winner');


        }

    });
});




function playagain() {
    document.getElementsByClassName('buttons')[0].style.display = 'flex'
    document.getElementById('play-again').style.display = 'none';
    document.getElementsByClassName('result')[0].style.display = 'none';
    if (playerScore > computerScore) {
        document.getElementById('next').style.display = 'block';
    }
    else {
        document.getElementById('next').style.display = 'none';
    }
}

if (computerScore === maxScore) {
    alert('you lose');
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    localStorage.removeItem('playerScore');
    localStorage.removeItem('computerScore');
    document.getElementById('your_score').textContent = playerScore;
    document.getElementById('computer_score').textContent = computerScore;
    document.getElementsByClassName('mainContainer')[0].style.display = 'block';
    document.getElementsByClassName('buttons')[0].style.display = 'flex';
    document.getElementsByClassName('result')[0].style.display = 'none';
    document.getElementById('replay').style.display = 'none';
    document.getElementById('next').style.display = 'none';
    document.getElementById('imageContainer').style.display = 'none';
}



function hurey() {
    if (playerScore < computerScore) {
        alert('computer win'); playerScore = 0;
        computerScore = 0;
        localStorage.removeItem('playerScore');
        localStorage.removeItem('computerScore');
    }
    else if (playerScore === computerScore) {
        alert('draw')
    }
    else {
        alert('player win')
        playerScore = 0;
        computerScore = 0;
        localStorage.removeItem('playerScore');
        localStorage.removeItem('computerScore');
        // document.getElementById('your_score').textContent = playerScore;
        // document.getElementById('computer_score').textContent = computerScore;
        // document.getElementsByClassName('buttons')[0].style.display = 'flex';
        // document.getElementsByClassName('result')[0].style.display = 'none';
        // document.getElementById('replay').style.display = 'none';
        // document.getElementById('next').style.display = 'none';
        document.getElementsByClassName('mainContainer')[0].style.display = 'none';
        document.getElementById('imageContainer').style.display = 'block';
        // document.getElementById('replay').style.display = 'block';
    }

}



document.getElementById('rules').addEventListener('click', function () {
    document.getElementById('modalBox').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function () {
    document.getElementById('modalBox').style.display = 'none';
});