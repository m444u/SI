import { useState } from 'react'
import './App.css'
import { Boton } from './Componets/boton'

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
      alert("CUIDADOOO")
    }}> Alerta</button>
    <button texto={"Ayuda"}></button>
  </div></>
}
export default App
