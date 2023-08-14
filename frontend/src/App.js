import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import React, { useState, useEffect } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'


function App() {

  const [vantaEffect, setVantaEffect] = useState(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: '.App',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 400.00,
        minWidth: 300.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x96c9ff,
        color1: 0x47598e,
        color2: 0xc0c0c0,
        wingSpan: 20.00,
        speedLimit: 4.00,
        alignment: 1.00,
        separation: 80.00,
        cohesion: 50.00
      })) 
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]);

  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
