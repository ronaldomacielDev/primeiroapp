import './App.css';
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Button from './components/button/button.js';
import Header from './components/header/header';


function App() {
  
  function evento(){
    alert('O evento disparou!!!')
  }
  
  
  
  
  
  const [carregando, setCarregando] = useState(true)
  const [contador, setContador] = useState(0)
  
  const valorMemorizado = useState(() => {
      return "qualquer coisa"
  },[])

  
    return (
      <div>
      {carregando ? 
        <span>Carregando...</span>
        : 
        <div>
        <button onClick={() => setContador(contador + 1)}>Adicionar</button>
        <span>{contador}</span>
        
        
        </div>
      }
    
    
    <button onClick={() => (!carregando)}>{carregando ? 'Carregar site' : 'Voltar para carregamento'} </button> 
    <Button name='Alterar valor' active onClick={setContador} />
    
    </div>
    
    
    );
  }
  
  export default App;
  