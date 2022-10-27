import React from 'react';
import { Titulo } from './components/TITULO/Titulo';
import { Contador } from './components/CONTADOR/Contador';
import { Logica } from './components/LOGICA/Logica';
import { useContador } from './hooks/useContador';
function App() {

  const {numberChange}=useContador()
  return (
    <div>
      <Titulo/>
      <Contador numberChange={numberChange}/>
      <Logica/> 
    </div>
    
  )
}

export default App;
