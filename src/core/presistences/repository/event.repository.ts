import { Inject, Injectable } from '@nestjs/common';
import { ConstantEntity, Event } from '../entity/sequelize';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventRepository {
  constructor(
    @Inject(ConstantEntity.EVENT_REPOSITORY)
    private readonly eventRepo: typeof Event,
  ) {}

  async findBySlug(slug: string): Promise<Event> {
    return await this.eventRepo.findOne<Event>({
      where: { slug: slug },
    });
  }

  async add(event: CreateEventDto): Promise<Event> {
    return await this.eventRepo.create<Event>(event);
  }
  async getAll(): Promise<Event[]> {
    return await this.eventRepo.findAll<Event>({ where: { isDeleted: false } });
  }
  async delete(slug: string): Promise<string> {
    await this.eventRepo.update({ isDeleted: true }, { where: { slug: slug } });
    return 'event deleted';
  }
}
