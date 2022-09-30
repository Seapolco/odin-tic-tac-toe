console.log('Hello World!');


// use module for gameboard and displayController

//factory function for players

const playerController = (() => {
    const playerOne = 'X';
    const playerTwo = 'O';
    let lastMove = '';
    let moves = 0;

    return {playerOne, playerTwo, lastMove, moves}
})()


const gameboard = (() => {
    let gameboardArray = ['','','','','','','','',''];
   
    // return gameboardArray.forEach((el,index) => {
    //     boardSquares[index].innerHTML = el;
    // })

    return {gameboardArray}
    



})();

const displayController = (() => {
    let boardSquares = document.querySelectorAll('.boardSquare');

    boardSquares.forEach((square) => {
        square.addEventListener('mousedown', (e) => {
            // let {playerOne, playerTwo, lastMove, moves} = playerController;
            if(playerController.moves<9) {

                playerController.moves++
                console.log(playerController.moves);
                if(playerController.moves % 2 === 1) {
                    gameboard.gameboardArray[e.target.attributes.data.value] = playerController.playerOne;
                } else if (playerController.moves % 2 === 0) {
                    gameboard.gameboardArray[e.target.attributes.data.value] = playerController.playerTwo;
                }
                // gameboard.gameboardArray[e.target.attributes.data.value] = 'hi';
                console.log('hi', e.target.attributes.data.value);
                console.log(gameboard.gameboardArray[e.target.attributes.data.value])
                e.target.innerText = gameboard.gameboardArray[e.target.attributes.data.value]
            }
        })
    })

})();




// boardSquares.forEach((square) => {
//     square.addEventListener('mousedown', (e) => {

//         if(lastMove === '' || lastMove === moveO) {
//             e.target.innerText = moveX;
//             lastMove = moveX;
//         } else {
//             e.target.innerText = moveO;
//             lastMove = moveO;
//         }

//     })
// })

// let moveX = 'X';
// let moveO = '0';
// let lastMove = '';
