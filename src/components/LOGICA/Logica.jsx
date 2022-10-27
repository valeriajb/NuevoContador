import React, { useEffect, useState} from "react";
import { useContador } from "../../hooks/useContador";
import "../LOGICA/Logica.css"
import { Contador } from "../CONTADOR/Contador";
export function Logica() {

  

  const { numberChange,diminishHandled, ResetHandled, increaseHandled } = useContador();
  const numeroContador=document.querySelector(".numeroContador");

 
  
  return (
    <div className="btnDiv">
      <button className="btnChildren" onClick={diminishHandled}>Disminuir</button>
      <button className="btnChildren" onClick={ResetHandled}>Restaurar</button>
      <button className="btnChildren" onClick={increaseHandled}>Aumentar</button>
    </div>
  );
}
