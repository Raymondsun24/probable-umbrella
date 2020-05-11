const WIDTH = 800
const HEIGHT = 800
const k = 1000
var date = new Date();
var score = 0

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
var date = new Date();

function swap(index1, index2){
    if(index1 == index2) return;
    var temp = data[index2];
    data[index2] = data[index1];
    data[index1] = temp;
}

async function selectionSort(){
    for(var i = 0; i < k; i++){
        await new Promise(r => setTimeout(r,1));
        console.log(i);
        var minIndex = i;
        var min = data[i];
        for(var j = i; j < k; j++){
            if(data[j] < min){
                min = data[j];
                minIndex = j;
            }
        }
        swap(minIndex, i);
    }
}

function draw(){
    clear();
    line(0, 0, 0, HEIGHT);
    line(0, 0, WIDTH, 0);
    line(0, HEIGHT, WIDTH, HEIGHT);
    line(WIDTH, 0, WIDTH, HEIGHT);
    const W = WIDTH/k;
    for(var i = 0; i < k; i++){
        rect(i*W, 800-(data[i]*8), W, (data[i]*8));
    }
}

console.log(data);
selectionSort();
console.log(data);