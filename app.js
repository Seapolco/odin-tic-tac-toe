console.log('Hello World!');


// use module for gameboard and displayController

//factory function for players



const gameboard = (() => {
    let gameboardArray = ['O','X','X','X','O','X','X','O','X'];
   
    // return gameboardArray.forEach((el,index) => {
    //     boardSquares[index].innerHTML = el;
    // })

    return {gameboardArray}
    



})();

const displayController = (() => {
    let boardSquares = document.querySelectorAll('.boardSquare');

    
    boardSquares.forEach((square) => {
        square.addEventListener('mousedown', (e) => {
            console.log('hi', e.target.attributes.data.value);
            console.log(gameboard.gameboardArray[e.target.attributes.data.value])
            e.target.innerText = gameboard.gameboardArray[e.target.attributes.data.value]
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
