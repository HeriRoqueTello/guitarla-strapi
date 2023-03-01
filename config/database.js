module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfa11pta49987h4u9g00-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_uqza'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'kSsd7S7RzIN5ZoKzCyOobtCSAf5JG96Z'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
