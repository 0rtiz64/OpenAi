import { Injectable } from '@nestjs/common';
import { orthographyChekUseCase } from './use-cases';

@Injectable()
export class GptService {
    // calls useCases

   async orthographychek(){
        return await orthographyChekUseCase();
    }
}
