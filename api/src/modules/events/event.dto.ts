import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsNumberString
} from 'class-validator'

export class EventDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsDateString()
  @IsNotEmpty()
  start: Date

  @IsDateString()
  @IsNotEmpty()
  end: Date

  @IsString()
  color: string

  @IsString()
  info: string
}

export class EventParamIdDto {
  @IsNumberString()
  id: number
}
