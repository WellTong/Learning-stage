import * as map from "./map.js"

var divContainer = document.getElementById('game');
var pieceWidth = 45;
var pieceHeight = 45;

function setDivContainer () {
    divContainer.style.width = pieceWidth * map.colNumber + 'px';
    divContainer.style.height = pieceHeight * map.rowNumber + 'px';
}
//设置
function setOnePiece (row, col) {
    var value = map.content[row][col];
    var div = document.createElement("div");
    var correct = isCorrect(row, col);
    div.className = "item";
    div.style.left = col * 45 + "px";
    div.style.top = row * 45 + "px";
    if(value === map.PLAYER){
        div.classList.add("player");
    } else if(value === map.WALL){
        div.classList.add("wall")
    } else if(value === map.BOX){
        if(correct){
            div.classList.add("correct-box")
        }else{
            div.classList.add("box")            
        }

    } else {
        if(correct){
            div.classList.add("correct");
        }else{
            return;
        }
    }

    divContainer.appendChild(div);
}

function isCorrect (row, col){
    for(var i = 0; i < map.correct.length; i ++){
        var point = map.correct[i];
        if(point.row === row && point.col === col){
            return true;
        }
    }
    return false;
}
//清空容器

function setContent () {
    divContainer.innerHTML = "";
    for(var row = 0; row < map.rowNumber; row ++){
        for(var col = 0; col < map.colNumber; col ++){
            setOnePiece(row, col);
        }
    }
}
export default function () {
    setDivContainer();
    setContent();
}