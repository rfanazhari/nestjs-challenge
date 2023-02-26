import { Controller, Get } from '@nestjs/common';

@Controller('event')
export class EventController {
  @Get('all')
  getHello(): string {
    return 'makan bang';
  }
}
