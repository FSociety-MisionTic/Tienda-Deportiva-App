import React, { useState } from "react";
import '../styles/stylesAdmin.css'
import Inicio from "./components/inicio";
import dbprod from '../archivo.json'
import ventasdb from "../ventas.json"
import TablasVentas from './pages/ListaVentas';
import TablaProductos from "./Productos";

function Admin () {
    const volver = () => { 
        setBarra(barra= <Inicio />)
        setInicio(inicio="")
        setvisualizar(visualizar=[])
        setModificar(modificar="")
        setListaventas(listaventas=[])
    }

    function inicializacion(){
        setInicio(inicio=imagen)
        setvisualizar(visualizar=[])
        setModificar(modificar="")
        setListaventas(listaventas=[])
    }

    /*function ListProductos() {
        setInicio(inicio="")
        setvisualizar(visualizar=<TablaProductos />)
        setModificar(modificar="")
        setListaventas(listaventas=[])
    }*/

    function modificacion () {
        let mod = 
        <div className="modificar">
            <div> <label> Nombre del Producto </label> <input type="text"></input> </div>
            <div> <label> Marca </label> <input type="text"></input> </div>
            <div> <label> Detalle </label> <input type="text"></input></div>
            <div> <label> Precio </label> <input type="number"></input></div>
            <button> Guardar </button>
        </div>
        setModificar(modificar=mod)
        setInicio(inicio="")
        setvisualizar(visualizar=[])
        setListaventas(listaventas=[])
    }

    function vistaVentas() {
        setInicio(inicio="")
        setvisualizar(visualizar=[])
        setModificar(modificar="")
        setListaventas(listasventas=<ListaVentas />)
    }
   

    let init = <div className="blockAdmin">
                    <button onClick={inicializacion} className="buttonCliente"> Inicio </button>
                    <button onClick={ListProductos} className="buttonCliente"> Lista Productos </button>
                    <button onClick={modificacion} className="buttonCliente"> Modificar Productos </button>
                    <button onClick={vistaVentas} className="buttonCliente"> Lista Ventas </button>
                    <button onClick={volver} className="buttonCliente"> Volver </button>
                </div>
    let imagen = <img src="https://p4.wallpaperbetter.com/wallpaper/971/328/974/model-clothing-advertising-blonde-wallpaper-preview.jpg"></img>
    
    let [barra, setBarra] = useState(init)    
    let [inicio, setInicio] = useState(imagen)
    let [visualizar, setvisualizar] = useState([])
    let [modificar, setModificar] = useState("")
    let [listaventas, setListaventas] = useState([])

    return(
        <>
        <div >
            {barra} 
            {inicio}  
            {visualizar} 
            {modificar}
            {listaventas}
                  
        </div>
        </>
    )

}
export default Admin