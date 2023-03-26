
let str = document.getElementById("tableSec");
function start(){
    str.removeAttribute("hidden");
    notor.removeAttribute("onclick");
    notor.innerHTML="Player turn";
    turn.textContent="X";
    return;
}


let mat=[[0,0,0],
         [0,0,0],
         [0,0,0]];
var flag=0, ctr=0;

const notor = document.getElementById("notator");
const turn = document.getElementById("turn");
function xORo(event){


    var id = event.target.id;

    const cell = document.getElementById(id);
    var row = parseInt(id[0]);
    var col = parseInt(id[1]);


    if(cell.innerHTML==""){
        if(flag==0){
            cell.classList.add("xAttr");
            flag=1;
            ctr++;
            cell.innerHTML="X";
            mat[row][col]=1;
            turn.innerHTML="O's";
        }
        else{
            cell.classList.add("oAttr");
            flag=0;
            ctr++;
            cell.innerHTML="O";
            mat[row][col]=2;
            turn.innerHTML="X's";
        }
    }
    else{
        alert("Fill on empty boxes");
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
        alert("Oops! Match Draw 👻");
        prompt("Do you like this game ?");
    }

    console.log(mat);
}