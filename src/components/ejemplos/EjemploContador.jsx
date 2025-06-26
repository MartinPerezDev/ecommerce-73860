import { useState, useEffect } from "react";
import EjemploHolaMundo from "./EjemploHolaMundo";

const EjemploContador = () => {
  const [contador, setContador] = useState(1);
  const [toggle, setToggle] = useState(true);

  console.log("re renderizacion del componente");

  const aumentar = () => {
    setContador(contador + 1);
  }

  const cambiarToggle = () => {
    setToggle(!toggle);
  }

  //se ejecuta solo en el montaje
  //ej: llamadas a apis, manejar eventos de forma manual con eventListener
  useEffect(()=> {
    console.log("1er useEffect");
  }, []);

  //se ejecuta en el montaje y cada vez que mi variable contador se actualice
  //ej: para realizar acciones especificas cuando una variable cambie de valor
  useEffect(()=> {
    console.log("2do useEffect");
  }, [contador]);


  //se ejecuta en el montaje y cada vez que se actualice cualquier estado de mi componente
  //ej: operaciones globales de monitoreo o registro
  useEffect(()=> {
    console.log("3er useEffect");
  });

  return (
    <div>
      <div>
        <p>{contador}</p>
        <button onClick={aumentar} >+</button>
      </div>
      <div>
        <p>Valor Toggle: {toggle.toString()} </p>
        <button onClick={cambiarToggle} >Alternar valor toggle</button>
        { toggle && <EjemploHolaMundo/> }
      </div>
    </div>
  )
}

export default EjemploContador