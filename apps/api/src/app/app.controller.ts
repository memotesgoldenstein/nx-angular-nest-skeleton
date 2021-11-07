import { Controller, Get } from '@nestjs/common';

import { Widget } from '@prod-angular-pco/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Widget {
    return this.appService.getData();
  }
}
