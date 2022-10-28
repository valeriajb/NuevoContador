import React, { useEffect, useState } from "react";
import { useContador } from "../../hooks/useContador";
import "../CONTADOR/Contados.css";


export function Contador({numberChange}) {
  
    return <h2 className="numeroContador">{numberChange}</h2>;
}
