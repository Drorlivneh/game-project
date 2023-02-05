function ReturnToStepOne() {
    var middleDivStepTwo = document.getElementById('middle-div-step-two');
    middleDivStepTwo === null || middleDivStepTwo === void 0 ? void 0 : middleDivStepTwo.remove();
    stepOne.style.display = 'block';
}
var scores = 0;
var pointNumber = document.getElementById('points-number');
var stepOne = document.getElementById('middle-div-step-one');
//#############################eventlisteners##########################
var scissors = document.getElementById('scissors');
scissors.addEventListener('click', function (e) {
    e.preventDefault();
    stepOne.style.display = 'none';
    presentStepTwo(scissors);
    pointNumber === null || pointNumber === void 0 ? void 0 : pointNumber.innerHTML = scores;
    if (scores < 2) {
        var myTimeout = setTimeout(ReturnToStepOne, 1000);
    }
});
var rock = document.getElementById('rock');
rock.addEventListener('click', function (e) {
    e.preventDefault();
    var yourCoise = "";
    stepOne.style.display = 'none';
    presentStepTwo(rock);
    pointNumber === null || pointNumber === void 0 ? void 0 : pointNumber.innerHTML = scores;
    if (scores < 2) {
        var myTimeout = setTimeout(ReturnToStepOne, 1000);
    }
});
var paper = document.getElementById('paper');
paper.addEventListener('click', function (e) {
    e.preventDefault();
    var yourCoise = "";
    stepOne.style.display = 'none';
    presentStepTwo(paper);
    pointNumber === null || pointNumber === void 0 ? void 0 : pointNumber.innerHTML = scores;
    if (scores < 2) {
        var myTimeout = setTimeout(ReturnToStepOne, 1000);
    }
});
function presentStepTwo(yourChoise) {
    // let yourChoiceSvg:string;
    // if(yourChoise===scissors){
    // yourChoiceSvg = 
    var borderColor = 'rgb(255, 170, 0)';
    var middleDiv = document.getElementById('middle-div');
    //containers
    var middleDivStepTwo = document.createElement("div");
    middleDivStepTwo.id = 'middle-div-step-two';
    var youPickedContainer = document.createElement("div");
    youPickedContainer.id = 'you-picked-container';
    var theHousePickedContainer = document.createElement("div");
    theHousePickedContainer.id = 'the-house-picked-container';
    //inside containers-titles
    var youPickedTitle = document.createElement("div");
    youPickedTitle.id = 'you-picked-title';
    youPickedTitle.innerHTML = 'you picked';
    var theHousePickedTitle = document.createElement("div");
    theHousePickedTitle.id = 'the-house-picked-title';
    theHousePickedTitle.innerHTML = 'The house picked';
    //inside containers-logos
    var youPickedLogo = document.createElement("img");
    youPickedLogo.className = 'button-step-two';
    var yourChoiseInNumber;
    switch (yourChoise) {
        case rock: {
            youPickedLogo.style.borderColor = 'hsl(349, 71%, 52%)';
            youPickedLogo.src = "./images/icon-rock.svg";
            yourChoiseInNumber = 1;
            break;
        }
        case paper: {
            youPickedLogo.style.borderColor = 'hsl(230, 89%, 62%)';
            youPickedLogo.src = "./images/icon-paper.svg";
            yourChoiseInNumber = 2;
            break;
        }
        case scissors: {
            youPickedLogo.style.borderColor = 'rgb(255, 170, 0)';
            youPickedLogo.src = "./images/icon-scissors.svg";
            yourChoiseInNumber = 3;
            break;
        }
    }
    var theHousePickedLogo = document.createElement("img");
    theHousePickedLogo.className = 'button-step-two';
    var computerChoice = Math.round(Math.random() * (3 - 1) + 1);
    console.log(computerChoice);
    if (computerChoice === 1) {
        theHousePickedLogo.style.borderColor = 'hsl(349, 71%, 52%)';
        theHousePickedLogo.src = "./images/icon-rock.svg";
        // theHousePickedLogo.width = '22'
    }
    if (computerChoice === 2) {
        theHousePickedLogo.style.borderColor = 'hsl(230, 89%, 62%)';
        theHousePickedLogo.src = "./images/icon-paper.svg";
    }
    if (computerChoice === 3) {
        theHousePickedLogo.style.borderColor = 'rgb(255, 170, 0)';
        theHousePickedLogo.src = "./images/icon-scissors.svg";
    }
    //#########################calulating win and points#################
    if (yourChoiseInNumber === computerChoice) {
        var message = "It's a tie";
    }
    if (yourChoiseInNumber === 1 && computerChoice === 2) {
        var message = "you lose";
        scores -= 1;
    }
    if (yourChoiseInNumber === 2 && computerChoice === 3) {
        var message = "you lose";
        scores -= 1;
    }
    if (yourChoiseInNumber === 3 && computerChoice === 1) {
        var message = "you lose";
        scores -= 1;
    }
    if (yourChoiseInNumber === 2 && computerChoice === 1) {
        var message = "you win";
        scores += 1;
    }
    if (yourChoiseInNumber === 3 && computerChoice === 2) {
        scores += 1;
    }
    if (yourChoiseInNumber === 1 && computerChoice === 3) {
        scores += 1;
    }
    middleDiv === null || middleDiv === void 0 ? void 0 : middleDiv.appendChild(middleDivStepTwo);
    middleDivStepTwo === null || middleDivStepTwo === void 0 ? void 0 : middleDivStepTwo.appendChild(youPickedContainer);
    if (scores >= 2) {
        var youWinContainer = document.createElement("div");
        youWinContainer.id = 'you-win-container';
        youWinContainer.innerHTML = 'YOU WIN';
        middleDivStepTwo === null || middleDivStepTwo === void 0 ? void 0 : middleDivStepTwo.appendChild(youWinContainer);
    }
    middleDivStepTwo === null || middleDivStepTwo === void 0 ? void 0 : middleDivStepTwo.appendChild(theHousePickedContainer);
    youPickedContainer === null || youPickedContainer === void 0 ? void 0 : youPickedContainer.appendChild(youPickedTitle);
    youPickedContainer === null || youPickedContainer === void 0 ? void 0 : youPickedContainer.appendChild(youPickedLogo);
    theHousePickedContainer === null || theHousePickedContainer === void 0 ? void 0 : theHousePickedContainer.appendChild(theHousePickedTitle);
    theHousePickedContainer === null || theHousePickedContainer === void 0 ? void 0 : theHousePickedContainer.appendChild(theHousePickedLogo);
    console.log(scores);
}
