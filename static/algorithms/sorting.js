const WIDTH = 800
const HEIGHT = 800
const k = 10

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


function swap(index1, index2){
    if(index1 == index2) return;
    var temp = data[index2];
    console.log(data[index1], data[index2]);
    data[index2] = data[index1];
    data[index1] = temp;
    console.log(data[index1], data[index2]);
    console.log(data);
}

async function selectionSort(){
    for(var i = 0; i < k; i++){
        var a = await setTimeout(ss, 200, i);
        console.log(i);
    }
}

function ss(i){
    console.log(i);
    var minIndex = i;
    var min = data[i];
    for(var j = i; j < k; j++){
        if(data[j] < data[i]){
            minIndex = j;
            min = data[j];
        }
    }
    swap(i, minIndex);
}

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
console.log('a');
console.log(data);
