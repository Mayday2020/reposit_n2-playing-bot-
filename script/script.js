//'use strict';
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n); 
};


let getStartGame = function() {
    let quest = 45;

    function checkAnswer() {
        let answer = prompt('Угадай число от 1 до 100');

        if (isNumber(answer)) {
            if (answer > quest) {
                console.log('answer: ', answer);
                alert('Загаданное число меньше');
                return getStartGame();
            } else if (answer < quest) {
                console.log('answer: ', answer);
                alert('Загаданное число больше');
                return getStartGame();
            } else if (answer === quest) {
                console.log('answer: ', answer);
                return answer;
            }
        } else if (!isNumber(answer)){
            if (answer === null) {
                console.log('answer: ', answer);
                return answer;
            } else {
                console.log('answer: ', answer);
                alert('Введи число!');
                getStartGame();
            }  
        }
    }
    checkAnswer();
};
getStartGame();

