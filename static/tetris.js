var gamePieces = ['L1', 'L2','Square','Z1','Z2', 'T', 'I'];
const width = 480;
const height = 800;
const blockSize = 40;
const x = width/blockSize;
const y = height/blockSize;
var grid = [];
function setup(){
    createCanvas(width, height);
}

for(var i = 0; i < (height/blockSize)*(width/blockSize); i++){
    grid[i] = 102;
}

function shiftDown(rowNum){
    for(var i = rowNum - 1; i>=0; i--){
        for(var j = 0; j < x; j++){
            grid[(i+1)*x+j] = grid[i*x+j];
        }
    }
    for(var i = 0; i < x; i++){
        grid[i] = 102;
    }
}

function checkGrid(){
    for(var i = 0; i < y; i++){
        var flag = false;
        for(var j = 0; j < x; j++){
            if(grid[i*x+j] == 102){
                flag = true;
                break;
            } 
        }
        if(flag) continue;
        shiftDown(i);
    }
}

function play(){
    this.type = Math.floor(Math.random() * 7);
    this.meta = [];
    this.metaNum = 0;
    switch(this.type){
        case 0:
            this.block = [];
            this.block[0] = [0,5];
            this.block[1] = [1,5];
            this.block[2] = [1,6];
            this.block[3] = [1,7];
            this.meta[0] = [[0,0],[-1,1],[0,-1],[1,-2]];
            this.meta[1] = [[0,0],[0,0],[-1,2],[-1,2]];
            this.meta[2] = [[0,1],[1,0],[2,-2],[1,-1]];
            this.meta[3] = [[0,-1],[0,-1],[-1,1],[-1,1]];
            break;
        case 1:
            this.block = [];
            this.block[0] = [0,7];
            this.block[1] = [1,5];
            this.block[2] = [1,6];
            this.block[3] = [1,7];
            this.meta[0] = [[0,-2],[0,1],[1,-1],[1,-1]];
            this.meta[1] = [[0,0],[-1,1],[-2,2],[-1,-1]];
            this.meta[2] = [[0,0],[0,0],[1,-1],[1,1]];
            this.meta[3] = [[0,2],[1,-1],[0,0],[-1,1]];
            break;
        case 2:
            this.block = [];
            this.block[0] = [0,5];
            this.block[1] = [0,6];
            this.block[2] = [1,5];
            this.block[3] = [1,6];
            this.meta[0] = [[0,0],[0,0],[0,0],[0,0]];
            this.meta[1] = [[0,0],[0,0],[0,0],[0,0]];
            this.meta[2] = [[0,0],[0,0],[0,0],[0,0]];
            this.meta[3] = [[0,0],[0,0],[0,0],[0,0]];
            break;
        case 3:
            this.block = [];
            this.block[0] = [0,5];
            this.block[1] = [0,6];
            this.block[2] = [1,6];
            this.block[3] = [1,7];
            this.meta[0] = [[0,1],[1,-1],[0,0],[1,-2]];
            this.meta[1] = [[0,-1],[-1,1],[0,0],[-1,2]];
            this.meta[2] = [[0,1],[1,-1],[0,0],[1,-2]];
            this.meta[3] = [[0,-1],[-1,1],[0,0],[-1,2]];
            break;
        case 4:
            this.block = [];
            this.block[0] = [0,6];
            this.block[1] = [0,7];
            this.block[2] = [1,5];
            this.block[3] = [1,6];
            this.meta[0] = [[0,-1],[1,-2],[0,1],[1,0]];
            this.meta[1] = [[0,1],[-1,2],[0,-1],[-1,0]];
            this.meta[2] = [[0,-1],[1,-2],[0,1],[1,0]];
            this.meta[3] = [[0,1],[-1,2],[0,-1],[-1,0]];
            break;
        case 5:
            this.block = [];
            this.block[0] = [0,6];
            this.block[1] = [1,5];
            this.block[2] = [1,6];
            this.block[3] = [1,7];
            this.meta[0] = [[0,0],[0,1],[0,1],[1,-1]];
            this.meta[1] = [[0,-1],[-1,0],[-1,0],[-1,0]];
            this.meta[2] = [[0,1],[1,-1],[1,-1],[1,0]];
            this.meta[3] = [[0,0],[0,0],[0,0],[-1,1]];
            break;
        case 6:
            this.block = [];
            this.block[0] = [0,4];
            this.block[1] = [0,5];
            this.block[2] = [0,6];
            this.block[3] = [0,7];
            this.meta[0] = [[0,0],[1,-1],[2,-2],[3,-3]];
            this.meta[1] = [[0,0],[-1,1],[-2,2],[-3,3]];
            this.meta[2] = [[0,0],[1,-1],[2,-2],[3,-3]];
            this.meta[3] = [[0,0],[-1,1],[-2,2],[-3,3]];
            break;
    }
    for(var i = 0; i < 4; i++){
        grid[this.block[i][0]*x+this.block[i][1]] = 255;
    }

    this.rotate = ()=>{


        const type = this.metaNum;
        const coords = new Array();
        for(var i = 0; i < 4; i++){
            coords[i] = new Array();
            console.log(this.meta[type][i][1]);
            coords[i][0] = this.block[i][0] + this.meta[type][i][0];
            coords[i][1] = this.block[i][1] + this.meta[type][i][1];
        }

        console.log(coords);
        for(var i = 0; i < 4; i++){
            const xcoord = coords[i][1];
            const ycoord = coords[i][0];
            if( xcoord < 0 || ycoord < 0 || xcoord >= x || ycoord >= y){
                console.log(xcoord);
                console.log('Cannot be rotated1');
                return;
            }
            if( grid[xcoord*x+ycoord] == 255 ){
                var flag = true;
                for(var j = 0; j < 4; j++){
                    if(xcoord == this.block[i][0] && ycoord == this.block[i][1]){
                        flag = false;
                    }
                }
                if(flag){
                    console.log('Cannot be rotated2');
                    return;
                }
            }
        }

        for(var i = 0; i < 4; i++){
            grid[this.block[i][0]*x+this.block[i][1]] = 102;            
        }
        for(var i = 0; i < 4; i++){
            console.log(grid[coords[i][0]*x+coords[i][1]]);
            grid[coords[i][0]*x+coords[i][1]] = 255;
            this.block[i][0]  = coords[i][0];
            this.block[i][1]  = coords[i][1];
        }
        this.metaNum += 1;
        this.metaNum %= 4;
        console.log(grid);

    }

    // * MoveLeft and moveRight functions require that blocks are aligned
    // * from left to right according to the x indices.
    this.moveLeft = function () {
        for(var i = 0; i< 4; i++){
            var flag = false;
            if(this.block[i][1] == 0 || grid[this.block[i][0]*x+this.block[i][1]-1] != 102){
                for(var j = 3; j >= 0; j--){
                    if(j != i && this.block[j][1] == this.block[i][1] - 1 && this.block[j][0] == this.block[i][0]) flag = true;
                }
                if(flag){
                    continue;
                }
                return;
            }
        }
        for(var i = 0; i < 4; i++){
            this.block[i][1] -= 1;
            grid[this.block[i][0]*x+this.block[i][1]] = 255;
            grid[this.block[i][0]*x+this.block[i][1]+1] = 102;
        }
    }
    this.moveRight = function () {
        for(var i = 3; i >= 0; i--){
            var flag = false;
            if(this.block[i][1] == x-1 || grid[this.block[i][0]*x+this.block[i][1]+1] != 102){
                for(var j = 3; j >= 0; j--){
                    if(j != i && this.block[j][1] == this.block[i][1] + 1 && this.block[j][0] == this.block[i][0]) flag = true;
                }
                if(flag){
                    continue;
                }
                return;
            }
        }
        for(var i = 3; i >= 0; i--){
            active.block[i][1] += 1;
            grid[this.block[i][0]*x+this.block[i][1]] = 255;
            grid[this.block[i][0]*x+this.block[i][1]-1] = 102;
        }
    }
    this.moveDown = function () {
        console.log(this.block);
        for(var i = 3; i >= 0; i--){
            var flag = false;
            if(this.block[i][0] == y-1 || grid[this.block[i][0]*x+this.block[i][1]+x] != 102){
                for(var j = 3; j >= 0; j--){
                    if(j != i && this.block[j][0] == this.block[i][0] + 1 && this.block[j][1] == this.block[i][1]) flag = true;
                }
                if(flag){
                    continue;
                }
                checkGrid();
                active = new play();
                setTimeout(()=>{active.moveDown()}, 500);
                return;
            }
        }
        for(var i = 3; i >= 0; i--){
            this.block[i][0] += 1;
            grid[this.block[i][0]*x+this.block[i][1]] = 255;
            grid[this.block[i][0]*x+this.block[i][1]-x] = 102;
        }
        setTimeout(()=>{active.moveDown()}, 500);
    }

    // Rotate functions

    return this;
}


var active = new play();

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        active.moveLeft();
        console.log('Left was pressed');
    }
    else if(event.keyCode == 39) {
        active.moveRight();
        console.log('Right was pressed');
    }
    else if(event.keyCode = 82){
        active.rotate();
        console.log('Rotate pressed');
    }
});

setTimeout(()=>{active.moveDown()}, 300);

function draw(){
    for(var i = 0; i <= width/blockSize; i++){
        line(i*blockSize, height, i*blockSize, 0);
    }
    for(var i = 0; i <= height/blockSize; i++){
        line(0, i*blockSize, width, i*blockSize);
    }
    
    for(var i = 0; i < (height/blockSize)*(width/blockSize); i++){
        if(grid[i] == 102){
            fill(102);
            rect(blockSize*(i%x), blockSize*(Math.floor(i/x)), blockSize, blockSize);
        }
        else if(grid[i] == 255){
            fill(255);
            rect(blockSize*(i%x), blockSize*(Math.floor(i/x)), blockSize, blockSize);
        }
    }
}

