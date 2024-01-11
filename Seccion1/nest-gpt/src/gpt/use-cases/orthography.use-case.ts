import OpenAI from "openai";

interface Options{
    prompt:string;
}

export const orthographyChekUseCase = async(openai:OpenAI,options:Options) => {
    const {prompt} = options;

    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "hola gpt como estas?" }],
        model: "gpt-3.5-turbo",
      });
    
     return completion.choices[0];

    // return {
    //     prompt:prompt,
    //     apikey: process.env.OPENAI_API_KEY
    // }
}