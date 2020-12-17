
class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();

    }
    init() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = game_width;
        this.canvas.height = game_height;
        document.body.appendChild(this.canvas);
        //create new board
        this.board = new board(this);




        //get keyboard
        this.listenKeyBoard();
        //create brick
        this.brick = new brick(this);
        //start game
        this.startgame();
        //start game loop
        this.loop();

    }
    startgame() {
        setInterval(() => {
            this.brick.fall();

        }, 500);
    }
    createNewBrick() {
        this.brick = new brick(this);
    }
    listenKeyBoard() {
        document.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'ArrowLeft': this.brick.moveLeft(); break;
                case 'ArrowRight': this.brick.moveRight(); break;
                case 'ArrowUp': this.brick.rotate(); break;
                case 'ArrowDown': this.brick.moveDown(); break;
            }
        });
    }
    loop() {

        //this.update();
        this.draw();
        setTimeout(() => this.loop(), 30);
    }
    //update() {
    //
    //}
    clearScreen() {
        this.context.fillStyle = '#ffffff';
        this.context.fillRect(0, 0, game_width, game_height);
    }
    draw() {
        this.clearScreen();
        this.board.draw();
        this.brick.draw();


    }

}
var g = new game();