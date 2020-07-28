import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('events')
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  start: Date

  @Column()
  end: Date

  @Column()
  color: string

  @Column()
  info: string
}
