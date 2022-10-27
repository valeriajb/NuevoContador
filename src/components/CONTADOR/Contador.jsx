import React, { useEffect, useState } from "react";
import { useContador } from "../../hooks/useContador";
import "../CONTADOR/Contados.css";


export function Contador() {
  
    const {numberChange}=useContador()

    
    return <h2 className="numeroContador">{numberChange}</h2>;
}
