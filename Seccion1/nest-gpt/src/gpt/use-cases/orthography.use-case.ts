import OpenAI from "openai";

interface Options{
    prompt:string;
}

export const orthographyChekUseCase = async(openai:OpenAI,options:Options) => {
    const {prompt} = options;

    const completion = await openai.chat.completions.create({
        messages: [
            { 
                role: "system", 
                content: `
                Te serán proveeídos textos en español con posibles errores ortográficos y gramaticales, debes de resopnder en formato JSON, tu tarea es corregirlos
                 y retornar información soluciones, también debes de dar un porcentaje de acierto por el usuario.
                Las palabras usadas deben existir en el diccionario de la Real Academia Española.
                 Solamente si el userscore es cero, debes de retornar un mensaje de felicitaciones y siempre utilizar emojis de lo contrario da un mensaje para que continue mejorando.
                
                 Ejemplo de salida:
                 {
                    userScore: number,
                    errors: string[]// ['error ->solución']
                    message: string, // Usa emojis y texto para felicitar al usuario
                 }
                `
            },
            {
                role:"user",
                content:prompt,
            }
        ],
        model: "gpt-3.5-turbo",
        temperature: 0.3,
        max_tokens: 150
      });
    
      const jsonReps= JSON.parse(completion.choices[0].message.content);
     return jsonReps;

    // return {
    //     prompt:prompt,
    //     apikey: process.env.OPENAI_API_KEY
    // }
}