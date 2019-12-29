let ask = confirm('Do you want to play a game?');
let maxRandomNumber = 9;
let stepRandomNumber = 4;
let numberTo = 8;
let totalPrize = 0;
let three = 3;
let twentyFive = 25;
let fifty = 50;
let oneHundred = 100;
let attempt = [twentyFive, fifty, oneHundred];
let eight = 8;
let nine = 9;

if(ask){
    let randomNumber = Math.floor(Math.random() * maxRandomNumber);
    for(let i=2; i>=0; i--){
        let choose = `Choose a roulette pocket number from 0 to ${numberTo}`;
        let possible = `Possible prize on current attempt: ${attempt[i]}$`;
        let number = +prompt(`${choose} \n Attempts left: ${i+1} \n Total prize: ${totalPrize} \n ${possible}`, '');
        if(number === randomNumber){
            let cong = `Congratulation, you won!`;
            let gameContinue = confirm(`${cong} Your prize is: ${attempt[i]}$. Do you want to continue?`);
            if(gameContinue){
                totalPrize += attempt[i];
                maxRandomNumber += stepRandomNumber;
                randomNumber = Math.floor(Math.random() * maxRandomNumber);
                numberTo+=stepRandomNumber;
                for(let j=0; j<three; j++){
                    attempt[j]*=2;
                }
                i=three;
            }else{
                totalPrize = attempt[i];
                alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
                let tryAgain = confirm('Do you want try again?');
                if(tryAgain){
                    numberTo=eight;
                    maxRandomNumber = nine;
                    attempt = [twentyFive, fifty, oneHundred];
                    totalPrize = 0;
                    i=three;
                }else{
                    alert('Bye');
                }
            }
        }else if(i===0){
            alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
            let tryAgain = confirm('Do you want try again?');
            if(tryAgain){
                numberTo= eight;
                attempt = [twentyFive, fifty, oneHundred];
                totalPrize = 0;
                maxRandomNumber = nine;
                i=three;
            }else{
                alert('Bye');
            }
        }
    }
}else{
    alert('You did not become a billionaire, but can');
}

