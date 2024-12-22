import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    // Start your application logic here
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

/**
 * Postgres DB:
 * username: user1
 * password: 123456789
 * db: gym_db
 * port: 5432
 * 
 * command to start postgres:
 * sudo service postgresql status
 * sudo service postgresql start
 */