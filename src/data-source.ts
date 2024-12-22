import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost", // or your WSL IP
  port: 5432,
  username: "user1",
  password: "123456789",
  database: "gym_db",
  synchronize: true, // Auto-create tables, turn off in production
  logging: false,
  entities: ["src/database/entities/**/*.ts"], // Path to your entity files
  migrations: ["src/database/migration/**/*.ts"],
  subscribers: ["src/database/subscriber/**/*.ts"],
});
