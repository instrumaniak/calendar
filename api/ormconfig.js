const commonOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: true
}

module.exports = [
  // NestJS TypeORM
  {
    ...commonOptions,
    name: 'default',
    entities: ['dist/**/*.entity.js']
  },
  // TypeORM CLI
  {
    ...commonOptions,
    name: 'migrations',
    migrations: ['src/db/migrations/*.ts'],
    cli: {
      migrationsDir: 'src/db/migrations'
    }
  }
]
