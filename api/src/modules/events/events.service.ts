import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { EventEntity } from './event.entity'
import { EventDto } from './event.dto'

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventEntity)
    private eventsRepository: Repository<EventEntity>
  ) {}

  async create(eventDto: EventDto): Promise<EventEntity> {
    try {
      const newEvent = new EventEntity()

      newEvent.title = eventDto.title
      newEvent.start = eventDto.start
      newEvent.end = eventDto.end
      newEvent.color = eventDto.color
      newEvent.info = eventDto.info

      return this.eventsRepository.save(newEvent)
    } catch (err) {
      throw new InternalServerErrorException(err)
    }
  }

  findAll(): Promise<EventEntity[]> {
    return this.eventsRepository.find()
  }

  findOne(id: number): Promise<EventEntity> {
    return this.eventsRepository.findOne(id)
  }

  async updateOne(id: number, data: EventDto): Promise<EventEntity> {
    try {
      await this.eventsRepository.update({ id }, data)
      return this.eventsRepository.findOne(id)
    } catch (err) {
      throw new InternalServerErrorException(err)
    }
  }

  async delete(id: number): Promise<void> {
    await this.eventsRepository.delete(id)
  }
}
