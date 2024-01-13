import knex from "knex";

const knexConfig ={
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: 3306,
    user: process.env.DB_USER || "your_database_user",
    password: process.env.DB_PASSWORD || "your_database_password",
    database: process.env.DB_NAME || "myapp_test",
  },
};

export default knexConfig;
