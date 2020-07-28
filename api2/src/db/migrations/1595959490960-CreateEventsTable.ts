import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateEventsTable1595959490960 implements MigrationInterface {
  public eventsTable: Table = new Table({
    name: 'events',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      },
      {
        name: 'title',
        type: 'varchar'
      },
      {
        name: 'start',
        type: 'datetime',
        default: 'current_timestamp'
      },
      {
        name: 'end',
        type: 'datetime',
        default: 'current_timestamp'
      },
      {
        name: 'color',
        type: 'varchar'
      },
      {
        name: 'info',
        type: 'varchar'
      }
    ]
  })
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.eventsTable)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.eventsTable)
  }
}
