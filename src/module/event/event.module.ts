import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventCoreModule } from '../../core/presistences';

@Module({
  imports: [EventCoreModule],
  controllers: [EventController],
})
export class EventModule {}
