console.log('Hello World!');


// use module for gameboard and displayController

//factory function for players

// add AI

/// First step, set up AI so the computer takes a random turn

const computerController = (() => {

    const faceComputer = false;

    let boardSquares = document.querySelectorAll('.boardSquare');

    const playerOne = {
        marker: 'X',
        placement: []
    };
    
    const computerPlayer = {
        marker: 'O',
        placement: [],

    }

    let moves = 0;
    let possiblePositions = [0,1,2,3,4,5,6,7,8];
                        

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
            if(typeof el === 'string'){
                winningNumbers.push(+el)
            } else {
                winningNumbers.push(el)
            }
            
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


    const computerPlayerEventListener = (e) => {

        let value = e.target.attributes.data.value;

        let random = (max) => {
            return Math.floor(Math.random() * max);
          }
        
        if(gameboard.gameboardArray[value] === '') {
            if(moves<9) {
                moves++
                console.log('MOVES',moves);
                if(moves % 2 === 1) {
                    if(e.target.innerHTML !== 'O') {
                        
                        console.log('PLAYERS CHOICE')
                        playerOne.placement.push(value);
                        // console.log(possiblePositions.indexOf(+value))
                        possiblePositions.splice(possiblePositions.indexOf(+value), 1);
                        console.log('possiblePositions',possiblePositions)
                        console.log('PLAYER ONE PLACEMENT',playerOne.placement);
                        gameboard.gameboardArray[value] = playerOne.marker;
                        e.target.innerText = gameboard.gameboardArray[value]

                         let randomIndex = random(possiblePositions.length -1);
                        let randomNumber = possiblePositions[randomIndex];
                        computerPlayer.placement.push(randomNumber)
                        console.log('random number',randomNumber);
                        console.log('COMPUTERS RANDOM PLACEMENT INDEX', randomNumber)
                        boardSquares[randomNumber].innerHTML = computerController.computerPlayer.marker
                        possiblePositions.splice(possiblePositions.indexOf(randomNumber), 1)
                        console.log(randomIndex);
                        moves++
                    }
                }   //else if (moves % 2 === 0) {
                        
                        console.log('COMPUTERS CHOICE!');
                        //  playerTwo.placement.push(value);
                        //  console.log(playerTwo.placement);
                        //  gameboard.gameboardArray[value] = playerTwo.marker;
                        // console.log(boardSquares)
                        // let randomIndex = random(possiblePositions.length -1);
                        // let randomNumber = possiblePositions[randomIndex];
                        // computerPlayer.placement.push(randomNumber)
                        // console.log('random number',randomNumber);
                        // console.log('COMPUTERS RANDOM PLACEMENT INDEX', randomNumber)
                        // boardSquares[randomNumber].innerHTML = computerController.computerPlayer.marker
                        // possiblePositions.splice(possiblePositions.indexOf(randomNumber), 1)
                        // console.log(randomIndex)
                        
                    //}
                // gameboard.gameboardArray[value] = 'hi';
                console.log('VALUE/INDEX', value);
                // console.log(gameboard.gameboardArray[value])
                // e.target.innerText = gameboard.gameboardArray[value]
            } 
        
            if (moves === 9 ){
                gameOver();

            }
            if(determineWins(winningPositions, playerOne.placement) === true) {
                gameOver('Player One Wins!');
            }
            if(determineWins(winningPositions, computerPlayer.placement) === true) {
                gameOver('Random Computer Wins!');
            
            }
            
        }
    }

    

    let gameOver = ((message = 'Game Over!') => {
        console.log(message);
    })

    return {faceComputer, computerPlayer, determineWins, computerPlayerEventListener, gameOver, winners, winningPositions, moves}
})()


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

    let {playerOne, playerTwo, moves, winningPositions, determineWins, gameOver} = playerController;
    let {faceComputer, computerPlayer, computerPlayerEventListener} = computerController;


    let boardSquares = document.querySelectorAll('.boardSquare');
    let restartGame = document.querySelector('.restart');

    let playAI = document.querySelector('.playAI');
    let playPlayer = document.querySelector('.playPlayer');

    const playerEventListener = (e) => {

        let value = e.target.attributes.data.value;
        
        if(gameboard.gameboardArray[value] === '') {
            if(moves<9 && determineWins(winningPositions, playerOne.placement) !== true && determineWins(winningPositions, playerTwo.placement) !== true) {
                moves++
                console.log(moves);
                if(moves % 2 === 1) {
                    playerOne.placement.push();
                    console.log(playerOne.placement);
                    gameboard.gameboardArray[value] = playerOne.marker;
                } else if (moves % 2 === 0) {
                    playerTwo.placement.push(value);
                    console.log(playerTwo.placement);
                    gameboard.gameboardArray[value] = playerTwo.marker;
                }
                // gameboard.gameboardArray[value] = 'hi';
                console.log('hi', value);
                console.log(gameboard.gameboardArray[value])
                e.target.innerText = gameboard.gameboardArray[value]
            } 
            if (moves === 9 ){
                gameOver();

            }
            if(determineWins(winningPositions, playerOne.placement) === true) {
                gameOver('Player One Wins!');
            }
            if(determineWins(winningPositions, playerTwo.placement) === true) {
                gameOver('Player Two Wins!');
            
            }
        }
    }


    playPlayer.addEventListener('click', () => {
        computerController.faceComputer = false;
        if(computerController.faceComputer === false) { 
            boardSquares.forEach((square) => {
                square.addEventListener('mousedown', playerEventListener, false)
            })
        }
        console.log('Play Player!');
    })

    playAI.addEventListener('click', () => {
        computerController.faceComputer = true;
        console.log('Play AI');
        if(computerController.faceComputer === true) {
            boardSquares.forEach((square) => {
                square.removeEventListener('mousedown', playerEventListener);
            })
        }
        boardSquares.forEach((square) => {
            square.addEventListener('mousedown', computerPlayerEventListener, false)
        })


    })

    // if(computerController.faceComputer === true) {
    //     boardSquares.forEach((square) => {
    //         square.removeEventListener('mousedown', playerEventListener);
    //     })

    // }

    restartGame.addEventListener('click', () => {
        boardSquares.forEach((el) => {
           return el.innerHTML = '';
        });
        let newArray =  new Array(9).fill('');
        gameboard.gameboardArray = newArray;
        playerOne.placement = [];
        playerTwo.placement = [];
        moves = 0;

    })

})();
