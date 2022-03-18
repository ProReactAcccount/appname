import React from "react";
import css from  './aula-css.css' /*por import e classes -melhor metodo*/
export default function Css(){

/*formas de usar css*/

const cssIncorporado={

color:"yellow",
fontSize:"20px"  /*todos comandos do css normal que tenham um - como font-size será desta forma aqui*/

}

return(

<section>
{/*forma inline*/}
<h2 style={{color:'red',fontSize:'25px'}}>Forma inline</h2>
{/*forma incorporada*/}
<h2 style={cssIncorporado}>Forma incorporada</h2>  
{/*forma import e classname*/}
<h2 className="import">Forma Import</h2>
</section>


)



}