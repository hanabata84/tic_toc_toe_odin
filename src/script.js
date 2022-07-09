let gameBoard = []
let playerMark = 'O';
const winningCombi = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const startGame = document.getElementById("startGame")
const startModal = document.getElementById("startModal");
startGame.addEventListener("click", () => {
    startModal.classList.remove("hidden");
})

const playerX = document.getElementById("playerX");
const board = document.getElementById("gameBoard");

playerX.addEventListener("click", () => {
    startModal.classList.add("hidden")
    startGame.classList.add("hidden")
    board.classList.remove("hidden")
    playerMark = "X";
})

const playerO = document.getElementById("playerO");

playerO.addEventListener("click", () => {
    startModal.classList.add("hidden")
    startGame.classList.add("hidden")
    board.classList.remove("hidden")
    playerMark = "O";
})


const clickButton = (mark) => {
    if (gameBoard[mark] === undefined) {
        if (playerMark === 'X') {
            document.getElementById("btn" + (mark + 1)).textContent = 'X';
            gamePlay(mark, playerMark);
            playerMark = 'O';
        } else if (playerMark === 'O') {
            document.getElementById("btn" + (mark + 1)).textContent = 'O';
            gamePlay(mark, playerMark);
            playerMark = 'X';
        }
    }
}

const gamePlay = (mark, playerMark) => {
    const winModal = document.getElementById('modal');
    const modalTitle = document.getElementById("modal-heading");
    gameBoard[mark] = playerMark;
    for (let i = 0; i <= 7; i++) {
        const winCond = winningCombi[i];
        let a = gameBoard[winCond[0]];
        let b = gameBoard[winCond[1]];
        let c = gameBoard[winCond[2]];
        if (a === undefined || b === undefined || c === undefined) {
            continue;
        }
        if (a === b && b === c) {
            modalTitle.textContent = `${a} wins!`
            winModal.classList.remove("hidden")
            break
        }
        if (gameBoard.length === 9 && gameBoard.includes(undefined) === false) {
            modalTitle.textContent = 'draw!'
            winModal.classList.remove("hidden")
            break
        }
    }

    console.log(mark)
    console.log(playerMark)
    console.log(gameBoard);
    const closeModal = document.getElementById("closeModal")
    closeModal.addEventListener("click", () => {
        winModal.classList.add("hidden");
        Array.from(document.getElementsByTagName("button")).forEach(b => b.disabled = true)
        location.reload();
    })
}



