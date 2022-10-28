import React, {useState} from "react";
import '../styles/StylesCliente.css'
import Inicio from "./inicio";
import datos from '../archivo.json'

function Cliente(){
    const volver = () => { 
        setBarra(barra= <Inicio />)
        setInicio(inicio="")
        setvisualizar(visualizar=[])
        setModificar(modificar="")
    }

    function inicializacion(){
        setInicio(inicio=imagen)
        setvisualizar(visualizar=[])
        
    }

    function visualizacion () {
        setInicio(inicio="")
        setvisualizar(visualizar=datos)
        
    }

    

    let init = <div className="blockCliente">
                    <button onClick={inicializacion} className="buttonCliente"> Inicio </button>
                    <button onClick={visualizacion} className="buttonCliente"> Lista Productos </button>                    
                    <button onClick={volver} className="buttonCliente"> Volver </button>
                </div>
    let imagen = <img src="https://p4.wallpaperbetter.com/wallpaper/971/328/974/model-clothing-advertising-blonde-wallpaper-preview.jpg"></img>
    
    let [barra, setBarra] = useState(init)    
    let [inicio, setInicio] = useState(imagen)
    let [visualizar, setvisualizar] = useState([])
    let [modificar, setModificar] = useState("")

    return(
        <div >
            {barra} 
            {inicio}  
            {visualizar.map( (elem, idx) => {
                return(
                    <div className="objetos" key={elem.id}>                        
                       <strong> Producto {idx+1} : </strong> {"Nombre: " +elem.nombreArt + "  " + "Marca: " + elem.marca + " " + "Detalle: " + elem.detalle + " " + "Precio: "+ " " + elem.precio}
                    </div>
                )
            })} 
                
        </div>
    )

}
export default Cliente