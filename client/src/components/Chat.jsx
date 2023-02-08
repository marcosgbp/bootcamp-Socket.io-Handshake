import React, { useState } from 'react'

const Chat = ({socket}) => {
    const [saludo, setSaludo] = useState("")
    socket.on("saludar",()=>{
        setSaludo("Hola Ninja, estoy ejecutando esto con socket")
    })
  return (
    <div>{saludo.length===0?<p>No hay saludo</p>:<p>{saludo}</p>}</div>
  )
}

export default Chat