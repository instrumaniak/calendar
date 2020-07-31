import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EventsModule } from '../events/events.module'
import { join } from 'path'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../../client/build'),
      exclude: ['/api*']
    }),
    TypeOrmModule.forRoot(),
    EventsModule
  ]
})
export class AppModule {}
