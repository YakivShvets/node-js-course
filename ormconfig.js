// Used for command line in local dev env only !!
module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 8889,
  username: 'root',
  password: 'root',
  database: 'dev',
  entities: ['src/typeorm/models/*.ts'],
  synchronize: false,
  migrations: ['src/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/typeorm/migrations',
  },
  logging: true,
}
