import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './modules/app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')

  // setup swagger
  const options = new DocumentBuilder()
    .setTitle('Calendar')
    .setDescription('Calendar API documentation')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api/docs', app, document)

  await app.listen(process.env.PORT || 5000)

  console.log('\nListening on: ', await app.getUrl())
}
bootstrap()
