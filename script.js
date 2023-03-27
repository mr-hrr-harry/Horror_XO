let mssg;
let tblSec = document.getElementById("tableSec");
function start(){
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
    location.reload();
}


let mat=[["","",""],
         ["","",""],
         ["","",""]];

var flag=0, ctr=0;
const notor = document.getElementById("notator");

function xORo(event){

    let cellId = event.target.id;
    console.log(cellId);
    let cell = document.getElementById(cellId);
    var row = parseInt(cellId[0]);
    var col = parseInt(cellId[1]);


    if(cell.innerHTML==""){
        if(flag==0){
            flag=1;
            ctr++;
            cell.innerHTML="X";
            mat[row][col]"X";
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
            if(mat[i][0]!=="" && mat[i][0]==mat[i][1] && mat[i][0]===mat[i][2]){
                
            }
        }
        
        
    }
    else{
        alert("You can't replace the filled boxes!");
        return;
    }

    console.log("clicked");
    console.log(ctr);


    if(ctr==9){
        notor.innerHTML="🤧 Oops Match Draw! Start Over";
        mssg.innerHTML="";
        notor.onclick = reload;
    }

    console.log(mat);
}
