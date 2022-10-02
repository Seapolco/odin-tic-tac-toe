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

    let calculateBestMove=((possPosition, winPosition) =>{

        let random = (max) => {
            return Math.floor(Math.random() * max);
        }
	
        let remainingWinners = [];
        let winnerooniThree = [];
        let winnerooniTwo = [];
        let winnerooniOne = [];
        
        winPosition.forEach((arr,index) => {
          
        possPosition.forEach((p) => {
          if(arr.indexOf(p) >= 0) {
            remainingWinners.push(index)
          }
        //   remainingWinners.push()
        //   console.log(p,arr,index, arr.indexOf(p),winPosition.indexOf(arr))
        })
      })
      
        let sortedWinners = remainingWinners.sort();
        
        let win = sortedWinners.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
      }, {});
        
    //     for(key in win) {
    //     if(win[key] === 3) {
    //       winnerooni.push(key)
    //     }
    //   }

    for(key in win) {
        if(win[key] === 3) {
          winnerooniThree.push(key)
        } else if(win[key] === 2) {
          winnerooniTwo.push(key)
        } else if(win[key] === 1) {
          winnerooniOne.push(key)
        }
    }

        
    if(winnerooniThree.length > 0) {
        console.log(winnerooniThree)
        let wThreefn = Number(winnerooniThree[0])
        console.log(wThreefn)
        console.log(winningPositions[wThreefn])
        let targetWP = winningPositions[wThreefn];
        let randomWinMove = targetWP[random(targetWP.length)];
        console.log('RANDOM WIN 3',randomWinMove)
          return randomWinMove
        } else if(winnerooniTwo.length > 0) {
          let wTwofn = Number(winnerooniTwo[0])
            console.log(wTwofn)
            console.log(winningPositions[wTwofn])
              let targetWP = winningPositions[wTwofn];
            let randomWinMove = targetWP[random(targetWP.length)];
        console.log('RANDOM WIN 2',randomWinMove)
          return randomWinMove
        } else if(winnerooniOne.length > 0) {
          let wOnefn = Number(winnerooniOne[0])
            console.log(wOnefn)
            console.log(winningPositions[wOnefn])
              let targetWP = winningPositions[wOnefn];
            let randomWinMove = targetWP[random(targetWP.length)];
        console.log('RANDOM WIN 1',randomWinMove)
          return randomWinMove
        }







        // return winnerooni
        // console.log('winnerooni', winnerooni);
        // let wfn = Number(winnerooni[0])
        // console.log('WINNEROONI 0',wfn)
        // // console.log(winningPositions[wfn])
        // let targetWP = winningPositions[wfn];
        // console.log('WINNINGPOSITIONS', targetWP);
        // let randomWinMove = targetWP[random(targetWP.length)];
        // if(randomWinMove === undefined) {
        //     return possiblePositions[random(possiblePositions.length)];
        // }
        // console.log('randomWinMove',randomWinMove)
        
        // // console.log('RANDOM WIN',randomWinMove)
        // return randomWinMove
        
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
                        e.target.innerText = gameboard.gameboardArray[value];

                        // let possibleWinners = calculateBestMove(possiblePositions, winningPositions);
                        let computerBestMove = calculateBestMove(possiblePositions, winningPositions);
                        console.log(computerBestMove)
                        // let randomIndex = random(possiblePositions.length -1);
                        // let randomNumber = possiblePositions[randomIndex];
                        computerPlayer.placement.push(computerBestMove);
                        possiblePositions.splice(possiblePositions.indexOf(computerBestMove), 1);
                        console.log('POSPOSITIONafterComp', possiblePositions)
                        // console.log('random number',randomNumber);
                        // console.log('COMPUTERS RANDOM PLACEMENT INDEX', randomNumber)
                        boardSquares[computerBestMove].innerHTML = computerController.computerPlayer.marker
                        
                        // console.log(randomIndex);

                        
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

    return {faceComputer, computerPlayer, determineWins, computerPlayerEventListener, gameOver, winners, winningPositions, moves,calculateBestMove}
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

/*


function calculateBestMove(possPosition, winPosition) {
	
    let remainingWinners = [];
    let winnerooni = [];
    
    winningPositions.forEach((arr,index) => {
      
    possiblePositions.forEach((p) => {
      if(arr.indexOf(p) >= 0) {
        remainingWinners.push(index)
      }
      remainingWinners.push()
      console.log(p,arr,index, arr.indexOf(p),winningPositions.indexOf(arr))
    })
  })
  
    let sortedWinners = remainingWinners.sort();
    
    let win = sortedWinners.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});
    
    for(key in win) {
    if(win[key] === 3) {
      winnerooni.push(key)
    }
  }
    return winnerooni
    
  }
  
  calculateBestMove(possiblePositions, playerOnePlacement)


  */