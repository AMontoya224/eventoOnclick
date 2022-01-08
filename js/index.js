function cambiar(){
    let log = document.getElementById("log")
    if (log.innerHTML == "Login"){
        log.innerHTML = "Logout";
    }
    else{
        log.innerHTML = "Login";
    }
}

let i = 13;
function likestres(){
    let trece = document.getElementById("likes-13")
    i++;
    trece.innerHTML = i + " " + "likes";
    alert("ninja was liked");
}

let j = 37;
function likessiete(){
    let trece = document.getElementById("likes-37")
    j++;
    trece.innerHTML = j + " " + "likes";
    alert("ninja was liked");
}

function remove(element){
    element.remove();
}