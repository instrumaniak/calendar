import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('events')
@Controller('events')
export class EventsController {
  @Get()
  findAll() {
    return 'all events'
  }

  @Post()
  create() {
    return 'create new event'
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return 'find event by id'
  }

  @Put(':id')
  updateById(@Param('id') id: string) {
    return 'update event by id'
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return 'delete event by id'
  }
}
