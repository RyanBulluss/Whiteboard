
function createWhiteboard(height, width) {
    let newBoard = [];
    for (let i = 0; i < height; i++) {
        let row = [];
        for (let j = 0; j < width; j++) {
            row.push({
                color: "blue"
            })
        }
        newBoard.push(row);
    }
    return newBoard;
}

export default createWhiteboard;