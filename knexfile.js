// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'test',
      user: 'root',
      password: 'qwerty2012',
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'test',
      user: 'root',
      password: 'qwerty2012',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'test',
      user: 'root',
      password: 'qwerty2012',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};
