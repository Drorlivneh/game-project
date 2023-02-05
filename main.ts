
function ReturnToStepOne(){
    let middleDivStepTwo = document.getElementById('middle-div-step-two') as HTMLDivElement | null;
    middleDivStepTwo?.remove();
    stepOne.style.display = 'block';
}
let scores:number = 0;
let pointNumber = document.getElementById('points-number') as HTMLDivElement | null;
let stepOne = document.getElementById('middle-div-step-one') as HTMLDivElement | null;
//#############################eventlisteners##########################
let scissors = document.getElementById('scissors') as HTMLDivElement | null;
scissors.addEventListener('click', function(e){
    e.preventDefault();
    stepOne.style.display = 'none';
    presentStepTwo(scissors);
    pointNumber?.innerHTML = scores;
    if (scores<2){
    const myTimeout = setTimeout(ReturnToStepOne, 1000);
}
})
let rock = document.getElementById('rock') as HTMLDivElement | null;
rock.addEventListener('click', function(e){
    e.preventDefault();
    let yourCoise:string = ""
    stepOne.style.display = 'none';
    presentStepTwo(rock);
    pointNumber?.innerHTML = scores;
    if (scores<2){
        const myTimeout = setTimeout(ReturnToStepOne, 1000);
    }
})
let paper = document.getElementById('paper') as HTMLDivElement | null;
paper.addEventListener('click', function(e){
    e.preventDefault();
    let yourCoise:string = ""
    stepOne.style.display = 'none';
    presentStepTwo(paper);
    pointNumber?.innerHTML = scores;
    if (scores<2){
        const myTimeout = setTimeout(ReturnToStepOne, 1000);
    }
})
function presentStepTwo(yourChoise:HTMLDivElement | null){
    // let yourChoiceSvg:string;
    // if(yourChoise===scissors){
        // yourChoiceSvg = 
        let borderColor:String = 'rgb(255, 170, 0)';
    let middleDiv = document.getElementById('middle-div') as HTMLDivElement | null;
    //containers
    let middleDivStepTwo = document.createElement("div") as HTMLElement;
    middleDivStepTwo.id = 'middle-div-step-two';
    let youPickedContainer = document.createElement("div") as HTMLElement;
    youPickedContainer.id = 'you-picked-container';
   
    let theHousePickedContainer = document.createElement("div") as HTMLElement;
    theHousePickedContainer.id = 'the-house-picked-container';
    
    //inside containers-titles
    let youPickedTitle = document.createElement("div") as HTMLElement;
    youPickedTitle.id = 'you-picked-title';
    youPickedTitle.innerHTML = 'you picked';
    let theHousePickedTitle = document.createElement("div") as HTMLElement;
    theHousePickedTitle.id = 'the-house-picked-title';
    theHousePickedTitle.innerHTML = 'The house picked';
    //inside containers-logos
    let youPickedLogo = document.createElement("img") as HTMLElement;
    youPickedLogo.className = 'button-step-two';
    let yourChoiseInNumber:number;
    switch(yourChoise) { 
        case rock: { 
            youPickedLogo.style.borderColor = 'hsl(349, 71%, 52%)';
            youPickedLogo.src = "./images/icon-rock.svg"

            yourChoiseInNumber=1
           break; 
        } 
        case paper: { 
            youPickedLogo.style.borderColor = 'hsl(230, 89%, 62%)';
            youPickedLogo.src = "./images/icon-paper.svg"

            yourChoiseInNumber=2
           break; 
        } 
        case scissors: { 
            youPickedLogo.style.borderColor = 'rgb(255, 170, 0)';
            youPickedLogo.src = "./images/icon-scissors.svg"
            yourChoiseInNumber=3
           break; 
        } 
     } 
    
    let theHousePickedLogo = document.createElement("img") as HTMLElement;
    theHousePickedLogo.className = 'button-step-two';
    let computerChoice:number = Math.round(Math.random() * (3 - 1) + 1);
    console.log(computerChoice);
    if(computerChoice===1){
        theHousePickedLogo.style.borderColor = 'hsl(349, 71%, 52%)';
        theHousePickedLogo.src = "./images/icon-rock.svg"
        // theHousePickedLogo.width = '22'
    }
    if(computerChoice===2){
        theHousePickedLogo.style.borderColor = 'hsl(230, 89%, 62%)';
        theHousePickedLogo.src = "./images/icon-paper.svg"
    }
    if(computerChoice===3){
        theHousePickedLogo.style.borderColor = 'rgb(255, 170, 0)';
        theHousePickedLogo.src = "./images/icon-scissors.svg"

    }
   
    //#########################calulating win and points#################
    if(yourChoiseInNumber===computerChoice){
        let message:string = `It's a tie`;
    }
    if(yourChoiseInNumber===1 && computerChoice===2){
        let message:string = `you lose`;
        scores-=1;
    }
    if(yourChoiseInNumber===2 && computerChoice===3){
        let message:string = `you lose`;
        scores-=1;
    }
    if(yourChoiseInNumber===3 && computerChoice===1){
        let message:string = `you lose`;
        scores-=1;
    }
    if(yourChoiseInNumber===2 && computerChoice===1){
        let message:string = `you win`;
        scores+=1;
    }
    if(yourChoiseInNumber===3 && computerChoice===2){
        scores+=1;
    }
    if(yourChoiseInNumber===1 && computerChoice===3){
        scores+=1;
    }
    middleDiv?.appendChild(middleDivStepTwo);
    middleDivStepTwo?.appendChild(youPickedContainer);
    if (scores>=2){
        let youWinContainer = document.createElement("div") as HTMLElement;
        youWinContainer.id = 'you-win-container';
        youWinContainer.innerHTML = 'YOU WIN'
        middleDivStepTwo?.appendChild(youWinContainer);
     }
    middleDivStepTwo?.appendChild(theHousePickedContainer);
    youPickedContainer?.appendChild(youPickedTitle);
    youPickedContainer?.appendChild(youPickedLogo);
    theHousePickedContainer?.appendChild(theHousePickedTitle);
    theHousePickedContainer?.appendChild(theHousePickedLogo);
console.log(scores);
 
    
}

