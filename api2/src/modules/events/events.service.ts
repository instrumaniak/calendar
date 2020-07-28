import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EventEntity } from './event.entity'
import { Repository } from 'typeorm'
@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventEntity)
    private eventsRepository: Repository<EventEntity>
  ) {}

  findAll(): Promise<EventEntity[]> {
    return this.eventsRepository.find()
  }

  findOne(id: string): Promise<EventEntity> {
    return this.eventsRepository.findOne(id)
  }

  async delete(id: string): Promise<void> {
    await this.eventsRepository.delete(id)
  }
}
