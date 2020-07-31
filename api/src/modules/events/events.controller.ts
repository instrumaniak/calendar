import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ValidationPipe
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { EventsService } from './events.service'
import { EventEntity } from './event.entity'
import { EventDto, EventParamIdDto } from './event.dto'

@ApiTags('events')
@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  findAll(): Promise<EventEntity[]> {
    return this.eventsService.findAll()
  }

  @Post()
  create(
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    createEventDto: EventDto
  ): Promise<EventEntity> {
    return this.eventsService.create(createEventDto)
  }

  @Get(':id')
  findById(@Param() params: EventParamIdDto): Promise<EventEntity> {
    return this.eventsService.findOne(params.id)
  }

  @Put(':id')
  updateById(
    @Param() params: EventParamIdDto,
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    updateEventDto: EventDto
  ): Promise<EventEntity> {
    return this.eventsService.updateOne(params.id, updateEventDto)
  }

  @Delete(':id')
  deleteById(@Param() params: EventParamIdDto): Promise<void> {
    return this.eventsService.delete(params.id)
  }
}
