const startGameBtn = document.getElementById('start-game-btn');

// const start = function() {
//     console.log('The game is starting...');
// };
// const person = {
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// };                                                          //functions can be stored in an object
// person.greet();
//                                                               //startGame();  direct execution
// console.dir(start);
//startGameBtn.addEventListener('click', start);                            //indirect execution
 
startGameBtn.addEventListener('click', function start() {
    console.log('The game is starting...');
});
