import { MiddlewareConsumer, Module } from '@nestjs/common';
import { EventModule } from './module/event/event.module';
import { LoggerMiddleware } from './utils';

@Module({
  imports: [EventModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
