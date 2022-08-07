const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('The game is starting...');

}

const person = {
    greet: function greet() {
        console.log('Hello there!');
    }
};      //functions can be stored in an object

//startGame();  direct execution
startGameBtn.addEventListener('click', startGame);   //indirect execution
 