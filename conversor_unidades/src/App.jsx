import React from "react";
import { useSelector } from "react-redux";
import ListClass from "./components/ListClass";


const App = () =>{
    const lista = useSelector(state => state.listareducers.lista)
    console.log(lista)
    return(
        <>
            <ListClass elements= {['Força', 'Área','Velocidade']}></ListClass>
            <ListClass elements= {lista}></ListClass>
        </>
    )
}

export default App