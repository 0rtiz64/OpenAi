import { Injectable } from '@nestjs/common';
import { orthographyChekUseCase } from './use-cases';
import { OrthographyDto } from './dtos';
import OpenAI from 'openai';

@Injectable()
export class GptService {
   private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
   })

   async orthographychek(orthographyDto:OrthographyDto){
        return await orthographyChekUseCase(this.openai,{
            prompt:orthographyDto.prompt
        });
    }
}
