let tblSec = document.getElementById("tableSec");
function start(){
    tblSec.removeAttribute("hidden");
    document.getElementById("refresh").removeAttribute("style");
    notor.removeAttribute("onclick");
    notor.innerHTML="Player turn";
    turn.textContent="X";
    return;
}

function reload(){
    location.reload();
}

let mat=[[0,0,0],
         [0,0,0],
         [0,0,0]];
var flag=0, ctr=0;

const notor = document.getElementById("notator");
const turn = document.getElementById("turn");
var end=0;

function xORo(event){


    var id = event.target.id;

    const cell = document.getElementById(id);
    var row = parseInt(id[0]);
    var col = parseInt(id[1]);


    if(cell.innerHTML==""){
        if(flag==0){
            flag=1;
            ctr++;
            cell.innerHTML="X";
            mat[row][col]=1;
            turn.innerHTML="O's";
        }
        else{
            flag=0;
            ctr++;
            cell.innerHTML="O";
            mat[row][col]=2;
            turn.innerHTML="X's";
        }
    }
    else{
        alert("You cant replace the filled boxes!");
        return;
    }

    console.log("clicked");
    console.log(ctr);

    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            if(mat[i][j]!=0){
                if(i==0 && j==0){
                }
            }
        }
    }

    if(ctr==9){
        notor.innerHTML="Oops Match Draw!";
        
    }

    console.log(mat);
}
