
class board {
    constructor(game) {
        this.game = game;
        this.data = [
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _]
        ];
    }
    isEmptyCell(row, col) {
        return this.data[row][col] == _;

    }
    isRowFull(row) {
        let full = true;
        for (let col = 0; col < num_col; col++) {
            if (this.isEmptyCell(row, col)) {
                full = false;
            }
        }
        return full;

    }
    checkFullRows() {
        for (let row = num_row - 1; row >= 0; row--) {
            if (this.isRowFull(row)) {
                this.removeRow(row);
            }


        }
    }
    removeRow(row) {
        this.data.splice(row, 1);
        this.data.unshift([_, _, _, _, _, _, _, _, _, _]);
        this.createDots();
    }
    createDots() {
        this.dots = [];
        for (let row = 0; row < num_row; row++) {
            for (let col = 0; col < num_col; col++) {
                if (this.data[row][col] == x) {
                    let newDot = new dot(this.game, row, col)
                    this.dots.push(newDot);
                }
            }
        }
    }
    draw() {
        this.createDots();
        this.dots.forEach((dot) => dot.draw());



    }
}