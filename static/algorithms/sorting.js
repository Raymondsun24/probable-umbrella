const WIDTH = 600
const HEIGHT = 600
const k = 1000
var date = new Date();
var score = 0;
let f = selectionSort;

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


async function mergeSort(arr, l ,r){
    if(arr.length <= 1) return arr;
    else{
        let arrLeft = await mergeSort(arr.slice(0, Math.floor(arr.length/2)), l, l+Math.floor(arr.length/2)-1);
        let arrRight  = await mergeSort(arr.slice(Math.floor(arr.length/2), arr.length), l+Math.floor(arr.length/2), r);
        let merged = await merge(arrLeft, arrRight,l);
        return merged;
    }
}

async function merge(arrA, arrB, l){
    if(arrB == undefined) return arrA;
    let sizeA = arrA.length;
    let sizeB = arrB.length;
    let index1 = 0, index2 = 0;
    let retVal = Array();
    for(let i = 0; i < sizeA+sizeB; i++){
        await new Promise(r => setTimeout(r,1));
        if(index1 == sizeA){
            data[l+i] = arrB[index2];
            retVal.push(arrB[index2++]);
        }
        else if(index2 == sizeB){
            data[l+i] = arrA[index1];
            retVal.push(arrA[index1++]);
        }
        else if(arrA[index1] > arrB[index2]){
            data[l+i] = arrB[index2];
            retVal.push(arrB[index2++]);
        }
        else{
            data[l+i] = arrA[index1];
            retVal.push(arrA[index1++]);
        }
    }
    return retVal;
}

function draw(){
    clear();
    background(220); 
    line(0, 0, 0, HEIGHT);
    line(0, 0, WIDTH, 0);
    line(0, HEIGHT, WIDTH, HEIGHT);
    line(WIDTH, 0, WIDTH, HEIGHT);
    const W = WIDTH/k;
    for(var i = 0; i < k; i++){
        fill(100);
        noStroke();
        rect(i*W, WIDTH-(data[i]*WIDTH/100), W, (data[i]*HEIGHT/100));
    }
}

function start(){
    f();
}

function reset(){
    data = getData();
}

function mergeSortWrap(){
    mergeSort(data, 0, k-1);
}

function openSort(sortMethod){
    switch(sortMethod){
        case 1:
            f = selectionSort;
            break;
        case 2:
            f = mergeSortWrap;
            break;
    }
}
