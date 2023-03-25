let mat=[[0,0,0],
         [0,0,0],
         [0,0,0]];
var flag=0, ctr=0;

function xORo(event){

    console.log(ctr);

    var id = event.target.id;

    const cell = document.getElementById(id);
    const row = parseInt(id[0]);
    const col = parseInt(id[1]);

    // const mainBg = document.getElementById("main");
    // if(flag==0){
    //     //mainBg.
    // }

    if(cell.innerHTML===""){
        if(flag==0){
            cell.className="xAttr";
            flag=1;
            ctr++;
            cell.innerHTML="X";
        }
        else{
            cell.innerHTML="O";
            cell.className="oAttr";
            flag=0;
            ctr++;
        }
    }
    else{
        alert("Fill on empty boxes");
    }

    console.log("clicked");

    if(ctr==9){
        alert("Oops! Match Draw 👻");
        prompt("Do you like this game ?");
    }

}