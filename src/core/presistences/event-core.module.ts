import { Module } from '@nestjs/common';
import { EventRepository } from './repository';
import { eventsProviders } from './repository/provider';

@Module({
  providers: [EventRepository, ...eventsProviders],
  exports: [EventRepository],
})
export class EventCoreModule {}
