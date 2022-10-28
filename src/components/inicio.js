import React, {useState} from "react";
import '../styles/styleInicio.css'
import Cliente from "./cliente";
import Admin from "./administrador"

const Inicio = () => {

   
    let init = <div>
                    <h1> Tienda Deportiva App </h1>
                    <button onClick={vistaCliente} className="buttonInicio"> Cliente </button>
                    <button onClick={vistaAdmin} className="buttonInicio"> Adminitrador </button>
                </div> 

    let imagen = <img src="https://p4.wallpaperbetter.com/wallpaper/971/328/974/model-clothing-advertising-blonde-wallpaper-preview.jpg"></img>
    let [estado, setEstado] = useState(init)
    
    
    function vistaCliente(){
       setEstado(estado = <Cliente />)       
    }
    function vistaAdmin(){
        setEstado(estado = <Admin/>)  
    }    

    return(
        <div>
            {estado}
        </div>        
    )
}

export default Inicio