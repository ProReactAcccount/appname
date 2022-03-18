import { getElementError } from "@testing-library/react";
import react from "react";
import { useState } from "react/cjs/react.development";

export default function Velha(){

    const[jogador,setJogador]=useState(1)
    const[empate,setEmpate]=useState(0)
    const[Vitoria,setVitoria]=useState("")

    const[span,setSpan]=useState(0)



const tudo=(n)=>{


     if(jogador==1 && document.getElementById(n).innerText==""){



        const x=document.getElementById(n).innerHTML="X"
        setJogador(2)

        setEmpate(empate+1)


   }else if(jogador==2 && document.getElementById(n).innerText==""){
    

         setEmpate(empate+1)
        const x=document.getElementById(n).innerHTML="O"
        setJogador(1)

    }else{}





Verify()



}


const fecha=()=>{

document.getElementById("vitoria").style.display="none"


document.getElementById(1).innerHTML=""
document.getElementById(2).innerHTML=""
document.getElementById(3).innerHTML=""
document.getElementById(4).innerHTML=""
document.getElementById(5).innerHTML=""
document.getElementById(6).innerHTML=""
document.getElementById(7).innerHTML=""
document.getElementById(8).innerHTML=""
document.getElementById(9).innerHTML=""




document.getElementById("1").style.color="#00FA9A"
document.getElementById("2").style.color="#00FA9A"
document.getElementById("3").style.color="#00FA9A"
document.getElementById("4").style.color="#00FA9A"
document.getElementById("5").style.color="#00FA9A"
document.getElementById("6").style.color="#00FA9A"
document.getElementById("7").style.color="#00FA9A"
document.getElementById("8").style.color="#00FA9A"
document.getElementById("9").style.color="#00FA9A"

setJogador(1)
setEmpate(0)


}




const Verify=()=>{


let a=document.getElementById(1).innerText
let b=document.getElementById(2).innerText
let c=document.getElementById(3).innerText
let d=document.getElementById(4).innerText
let e=document.getElementById(5).innerText
let f=document.getElementById(6).innerText
let g=document.getElementById(7).innerText
let h=document.getElementById(8).innerText
let i=document.getElementById(9).innerText







/*verificação horizontal*/

if((a==b)&& (a==c)&&(b==c)&&a!=""){

document.getElementById("vitoria").style.display="block"
document.getElementById("1").style.color="cyan"
document.getElementById("2").style.color="cyan"
document.getElementById("3").style.color="cyan"
setVitoria(a +   " Ganhou esta porcaria !")

}else


if((d==e)&& (d==f)&&(e==f)&& d!=""){

    
    
document.getElementById("vitoria").style.display="block"    
document.getElementById("4").style.color="cyan"
document.getElementById("5").style.color="cyan"
document.getElementById("6").style.color="cyan"
setVitoria(d +   " Ganhou esta porcaria !")
    
    }else


if((g==h)&& (g==i)&&(h==i)&& g!=""){

document.getElementById("vitoria").style.display="block" 
document.getElementById("7").style.color="cyan"
document.getElementById("8").style.color="cyan"
document.getElementById("9").style.color="cyan"
setVitoria(g +   " Ganhou esta porcaria !") 
        
    
    }else
    
    
    
    
/*************************************/  

/*verificação vertical*/

if((a==d)&& (a==g)&&(d==g)&&a!=""){

document.getElementById("1").style.color="cyan"
document.getElementById("4").style.color="cyan"
document.getElementById("7").style.color="cyan"
document.getElementById("vitoria").style.display="block"
setVitoria(a +   " Ganhou esta porcaria !")
    
    }else


if((b==e)&& (b==h)&&(e==h)&&b!=""){

document.getElementById("vitoria").style.display="block"
document.getElementById("2").style.color="cyan"
document.getElementById("5").style.color="cyan"
document.getElementById("8").style.color="cyan"
setVitoria(b +   " Ganhou esta porcaria !")
        
    }else
        
if((c==f)&& (c==i)&&(f==i)&&c!=""){

document.getElementById("vitoria").style.display="block"
document.getElementById("3").style.color="cyan"
document.getElementById("6").style.color="cyan"
document.getElementById("9").style.color="cyan"
 setVitoria(c +   " Ganhou esta porcaria !")  
            
    }else
    

/*************************************/  



/*verificação diagonal*/

if((g==e)&& (g==c)&&(e==c)&&g!=""){

    document.getElementById("vitoria").style.display="block"
    document.getElementById("3").style.color="cyan"
    document.getElementById("5").style.color="cyan"
    document.getElementById("7").style.color="cyan"

    setVitoria(g +   " Ganhou esta porcaria !")    
    
    }else


if((a==e)&& (a==i)&&(e==i)&&a!=""){

    document.getElementById("vitoria").style.display="block"
    document.getElementById("1").style.color="cyan"
    document.getElementById("5").style.color="cyan"
    document.getElementById("9").style.color="cyan"
    setVitoria(a +   " Ganhou esta porcaria !")
        
    }else if(empate == 8) {

        document.getElementById("vitoria").style.display="block"
        setVitoria("Empate seus porcaria !")
        document.getElementById("1").style.color="red"
        document.getElementById("2").style.color="red"
        document.getElementById("3").style.color="red"
        document.getElementById("4").style.color="red"
        document.getElementById("5").style.color="red"
        document.getElementById("6").style.color="red"
        document.getElementById("7").style.color="red"
        document.getElementById("8").style.color="red"
        document.getElementById("9").style.color="red"

    }
        

    /*empate*/


                



/*************************************/  




}




return(


    <html lang="pt-br">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Jogo da Velha</title>
    </head>
    
    <body>
        



        
<div id="tudo">


<div id="tabuleiro" onClick={()=>tudo("1")}><span id="1" class="ums"></span></div>
<div id="tabuleiro" onClick={()=>tudo("2")}><span id="2" class="ums"></span></div>
<div id="tabuleiro" onClick={()=>tudo("3")}><span id="3" class="ums"></span></div>
<div id="tabuleiro" onClick={()=>tudo("4")}><span id="4" class="ums"></span></div>
<div id="tabuleiro" onClick={()=>tudo("5")}><span id="5" class="ums"></span></div>
<div id="tabuleiro" onClick={()=>tudo("6")}><span id="6" class="ums"></span></div>
<div id="tabuleiro" onClick={()=>tudo("7")}><span id="7" class="ums"></span></div>
<div id="tabuleiro" onClick={()=>tudo("8")}><span id="8" class="ums"></span></div>
<div id="tabuleiro" onClick={()=>tudo("9")}><span id="9" class="ums"></span></div>


</div>

<div id="vitoria">
    <span id="x" onClick={()=>fecha()}>X</span>
<h1 id="vitoria2">{Vitoria}</h1>
</div>


    </body>
    </html>
















)




} 