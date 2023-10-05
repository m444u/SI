import { useState } from 'react'
import './App.css'
import { Boton } from './Componets/boton'
import {Image} from "@nextui-org/react";

function App({texto}) {
  const[estado, setEstado] = useState("GARZA STORE")

  return<><div>
    <hi>
    {estado}
    </hi>
    <button onClick={() => {
      if (estado=="Comprar"){
        setEstado("Comprado")
      }
      else{
        setEstado("Comprar")
      }
      
    }}> Comprar producto</button>
    <button onClick={() => {
      
    }}> Carrito</button>
    <button texto={"Ayuda"}></button>
  </div></>
}
export default App
