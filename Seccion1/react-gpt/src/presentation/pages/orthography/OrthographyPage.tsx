import React from 'react'
import { GptMessage,MyMessage, TypingLoader } from '../../components/index';


export const OrthographyPage = () => {
  return (
    <div className='chat-container'>
      <div className='chat-messages'>
        <div className='grid grid-cols-12 gap-y-2'>

          {/* Bienvenida */}
          <GptMessage text='Hola. Como puedo ayudarte?' />

          <MyMessage text="Hola mundo" />

          <TypingLoader  className="fade-in"/>
          
        </div>
      </div>
    </div>
  )
}
