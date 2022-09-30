console.log('Hello World!');


// use module for gameboard and displayController

//factory function for players

const playerController = (() => {
    const playerOne = 'X';
    const playerTwo = 'O';
    let lastMove = '';
    let moves = 0;
    let gameOver = (() => {
        console.log('Game Over!');
    })

    return {playerOne, playerTwo, lastMove, moves, gameOver}
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
    let restartGame = document.querySelector('.restart');



    boardSquares.forEach((square) => {
        square.addEventListener('mousedown', (e) => {
            // let {playerOne, playerTwo, lastMove, moves} = playerController;
            if(gameboard.gameboardArray[e.target.attributes.data.value] === '') {
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
                if (playerController.moves === 9 ){
                    playerController.gameOver();
                }

            }
        })
    })

    restartGame.addEventListener('click', () => {
        boardSquares.forEach((el) => {
           return el.innerHTML = '';
        });
        let newArray =  new Array(9).fill('');
        gameboard.gameboardArray = newArray;
        playerController.moves = 0;

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
