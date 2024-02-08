let contadorbotao2 = 1
let contadorbotao3 = 0

function botao1(){
    document.getElementById("botao1").innerHTML = feedback;
}
function botao2(){
    document.getElementById("botao2").innerHTML = contadorbotao2;
    contadorbotao2++
}
function botao3(){
    let tres_id = document.getElementById("tres");

    if(contadorbotao3 % 2 == 0){
        document.getElementById("botao3").style.color = "gray";
    }
    else{
        document.getElementById("botao3").style.color = "black";
    }
    contadorbotao3++
    }
    
   
    

    
