const WIDTH = 800
const HEIGHT = 800
const k = 10
var date = new Date();

function setup(){
    createCanvas(WIDTH, HEIGHT);
}

function getData(){
    var data = new Array(k);
    for(var i = 0; i < k; i++){
        data[i] = Math.random()*100;
    }
    return data;
}

var data = getData();
console.log(data);

function draw(){
    line(0, 0, 0, HEIGHT);
    line(0, 0, WIDTH, 0);
    line(0, HEIGHT, WIDTH, HEIGHT);
    line(WIDTH, 0, WIDTH, HEIGHT);
    const W = WIDTH/k;
    for(var i = 0; i < k; i++){
        rect(i*W, 800-(data[i]*8), W, (data[i]*8));
    }
}

var a = selectionSort();
console.log(data);
