import { isWin, playerMove } from "./play.js"
import showUI from "./ui.js";

showUI();
var over = false;
window.onkeydown = function (e){
    var result = false;
    if (e.key === "ArrowDown"){
        result = playerMove("down")
    }else if (e.key === "ArrowLeft"){
        result = playerMove("left")
    }else if (e.key === "ArrowUp"){
        result = playerMove("up")
    }else if (e.key === "ArrowRight"){
        result = playerMove("right")
    }
    if(result){
        showUI();
        if(isWin()){
            alert("胜利了！！");
            over = true;
            return;
        }
    }
}