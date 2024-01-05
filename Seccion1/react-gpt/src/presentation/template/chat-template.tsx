import React, { useState } from 'react'
import { GptMessage,MyMessage, TypingLoader,TextMessageBox } from '../components/index';

interface Message{
  text:string;
  isGpt: boolean;
}

export const ChatTemplate = () => {
  const [isLoading,setIsLoading]= useState(false);
  const [messages,setMessages]= useState<Message[]>([]);
  
  const handlePost = async (text:string)=>{
    setIsLoading(true);
    setMessages((prev)=>([...prev,{text,isGpt:false}]));
 
    // Todo UseCase

    setIsLoading(false);

    // Todo add message isGpt on true
  }
  return (
    <div className='chat-container'>
      <div className='chat-messages'>
        <div className='grid grid-cols-12 gap-y-2'>

          {/* Bienvenida */}
          <GptMessage text='Hola. Como puedo ayudarte?' />

          {
            messages.map((message, index) => (
              
              message.isGpt 
              ? 
                (<GptMessage key={index} text="De openAi" />) 
              :
                (<MyMessage key={index} text={message.text} />)
                
            ))
          }

        {
          isLoading && (
            <div className='col-start-1 col-end-12 fade-in'>
              <TypingLoader/>
            </div>
          )
        }

        
          
        </div>
      </div>

      <TextMessageBox
        onSendMessage={handlePost}
        placeholder='Escribe tu mensaje...'
        disableCorrections
      />
    </div>
  )
}
