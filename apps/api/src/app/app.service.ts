import { Injectable } from '@nestjs/common';
import { Widget } from '@prod-angular-pco/api-interfaces';

@Injectable()
export class AppService {
  getData(): Widget {
    return {
      id: null,
      title: 'i am a title',
      description: 'i am a description',
    };
  }
}
