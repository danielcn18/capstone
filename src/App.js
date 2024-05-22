import React, { useState, useRef } from 'react';
import './App.css';
import AppRoutes from './components/AppRoutes';

function App() {
  /* const [columnX, setColumnX] = useState(448); 
  const [isActive, setIsActive] = useState(false);
  const columnRef = useRef(null); 
  const scrollRef = useRef(null);

  const mouseUp = (e) => {
    scrollRef.current.classList.remove('after-bg');
  }

  const mouseDown = (e) => {
    
    // scrollRef.current.classList.add('after-bg');
    // const mouseX = e.clientWidth;
    // setColumnX(); // set to mousePos minus the previous columnX 
  } */

  useState(() => {  
    
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
