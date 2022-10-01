console.log('Hello World!');


// use module for gameboard and displayController

//factory function for players

const playerController = (() => {


    const playerOne = {
        marker: 'X',
        placement: []
    };
    const playerTwo = {
        marker: 'O',
        placement: []
    };
    let lastMove = '';
    let moves = 0;


    let winningPositions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ];


    let winners = ((playerArray, winArray) => {
        let wins = [];
        let winningNumbers = []
        let streak = false;
        
        playerArray.forEach((el, index) => {
        
        
            if(winArray.includes(+el) && winningNumbers.includes(+el) !== true) {
            
            wins.push(index);
            winningNumbers.push(+el)
            // console.log(wins)
            // console.log(winningNumbers)
        }
        
        })
        // console.log(wins)
        
        // if(wins[0] + 1 === wins[1] && wins[1] + 1 === wins[2]) {
        //     console.log(wins)
        //     streak = true;
        // }
        if(wins.length === 3) {
            streak = true;
        }
        // console.log(wins)
        // console.log(streak)
            return streak;
                    
        })
    
    let determineWins = ((winningList, playersPlacement) => {
      let win = false;
      
      winningList.forEach((el) => {
        if(winners(playersPlacement, el) === true) {
          win = true;
          console.log(el)
        }
      })
      return win;
    })


    
    let gameOver = ((message = 'Game Over!') => {
        console.log(message);
    })

    return {playerOne, playerTwo, lastMove, moves, winningPositions, winners,determineWins, gameOver}
})()


const gameboard = (() => {
    let gameboardArray = ['','','','','','','','',''];
   

    return {gameboardArray}
    
})();

const displayController = (() => {
    let boardSquares = document.querySelectorAll('.boardSquare');
    let restartGame = document.querySelector('.restart');



    boardSquares.forEach((square) => {
        square.addEventListener('mousedown', (e) => {
            // let {playerOne, playerTwo, lastMove, moves} = playerController;
            if(gameboard.gameboardArray[e.target.attributes.data.value] === '') {
                if(playerController.moves<9 && playerController.determineWins(playerController.winningPositions, playerController.playerOne.placement) !== true && playerController.determineWins(playerController.winningPositions, playerController.playerTwo.placement) !== true) {
                    playerController.moves++
                    console.log(playerController.moves);
                    if(playerController.moves % 2 === 1) {
                        playerController.playerOne.placement.push(e.target.attributes.data.value);
                        console.log(playerController.playerOne.placement);
                        gameboard.gameboardArray[e.target.attributes.data.value] = playerController.playerOne.marker;
                    } else if (playerController.moves % 2 === 0) {
                        playerController.playerTwo.placement.push(e.target.attributes.data.value);
                        console.log(playerController.playerTwo.placement);
                        gameboard.gameboardArray[e.target.attributes.data.value] = playerController.playerTwo.marker;
                    }
                    // gameboard.gameboardArray[e.target.attributes.data.value] = 'hi';
                    console.log('hi', e.target.attributes.data.value);
                    console.log(gameboard.gameboardArray[e.target.attributes.data.value])
                    e.target.innerText = gameboard.gameboardArray[e.target.attributes.data.value]
                } 
                if (playerController.moves === 9 ){
                    playerController.gameOver();

                }
                if(playerController.determineWins(playerController.winningPositions, playerController.playerOne.placement) === true) {
                    playerController.gameOver('Player One Wins!');
                }
                if(playerController.determineWins(playerController.winningPositions, playerController.playerTwo.placement) === true) {
                    playerController.gameOver('Player Two Wins!');
                
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
        playerController.playerOne.placement = [];
        playerController.playerTwo.placement = [];
        playerController.moves = 0;

    })

})();
