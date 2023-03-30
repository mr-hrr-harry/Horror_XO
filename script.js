let mssg;
let tblSec = document.getElementById("tableSec");
const buttonClick = new Audio("button_click_pop.mp3");

function start(){

    buttonClick.play();
    tblSec.removeAttribute("hidden");
    document.getElementById("refresh").removeAttribute("style");

    notor.innerHTML="'s turn";
    mssg = document.createElement("SPAN");
    mssg.id = "mssg";
    mssg.innerHTML = "X";
    notor.prepend(mssg);

    notor.removeAttribute("onclick");
    return;
}


function reload(){
    buttonClick.play();
    location.reload();
}


let mat=[["","",""],
         ["","",""],
         ["","",""]];

var flag=0, ctr=0, win=0;
const notor = document.getElementById("notator");
const alertSound = new Audio("warning_sound.mp3");
const crrtClick = new Audio("crrt_fill_click.mp3");

function xORo(event){

    if(win==1){
        alert("Match already over! Start again");
        return;
    }


    let cellId = event.target.id;
    console.log(cellId);
    let cell = document.getElementById(cellId);
    var row = parseInt(cellId[0]);
    var col = parseInt(cellId[1]);


    if(cell.innerHTML==""){
        crrtClick.play();
        if(flag==0){
            flag=1;
            ctr++;
            cell.innerHTML="X";
            mat[row][col]="X";
            mssg.innerHTML="O";
            cell.setAttribute("style", "color:#CA2A2A");
        }
        else{
            flag=0;
            ctr++;
            cell.innerHTML="O";
            mat[row][col]="O";
            mssg.innerHTML="X";
            cell.setAttribute("style", "color:#FFFF00");
        }

        for(i=0; i<3; i++){
            if(mat[i][0]!="" && mat[i][0]==mat[i][1] && mat[i][0]==mat[i][2]){
                notor.innerText=mat[i][0] + " wins";
                setFinalRes();
                return;
            }
        }
        for(j=0; j<3; j++){
            if(mat[0][j]!="" && mat[0][j]==mat[1][j] && mat[0][j]==mat[2][j]){
                notor.innerHTML=mat[0][j]+" wins";
                setFinalRes();
                return;
            }
        }

        if(mat[0][0]!="" && mat[0][0]==mat[1][1] && mat[0][0]==mat[2][2]){
            notor.innerHTML = mat[0][0]+" wins";
            setFinalRes();
            return;
        }

        if(mat[0][2]!="" && mat[0][2]==mat[1][1] && mat[0][2]==mat[2][0]){
            notor.innerHTML = mat[0][2]+" wins";
            setFinalRes();
            return;
        }
        
    }
    else{
        alertSound.play();
        alert("You can't replace the filled boxes!");
        return;
    }

    console.log("clicked");
    console.log(ctr);


    if(ctr==9){
        notor.innerHTML="🤧 Oops Match Draw! Start Over";
        new Audio("failure_sound.mp3").play() ; 

        notor.onclick = reload;
    }

    console.log(mat);
}

function setFinalRes(){

    const winGif = document.createElement("IMG");
    winGif.id ="gifImg";
    winGif.setAttribute("src","winner_popper.gif");
    document.getElementById("tableSec").prepend(winGif);

    new Audio("winning_trumpets.mp3").play();
    new Audio("winning_applasue.mp3").play();

    notor.onclick = reload;
    notor.setAttribute("style",
        "font: 800;"+
        "font-size: 32px;"+
        "-webkit-text-stroke-width: 1.5px;"+
        "-webkit-text-stroke-color: #000;"+
        "-webkit-text-fill-color: #22ff00;"+
        "animation-name: zoomIn"+
        "animation-duration: 10s"+
        "animation-iteration-count: infinite");
        
    win=1;

    setTimeout(function(){
        winGif.remove();
    }, 10000);
    return;
}
 