import React, { useState, useEffect } from 'react';

import Chat from "./components/Chat";
import {io} from 'socket.io-client';

function App() {
  const [socket] = useState(()=>io(":8000"))
  useEffect(()=>{
    socket.on('connection',()=>{
      console.log("Conexion establecida con el servidor");
    })
    return ()=> socket.disconnect("true");
  },[])
  return (
    <div className="App">
        <Chat socket={socket} />
    </div>
  );
}

export default App;
