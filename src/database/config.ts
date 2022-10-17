import * as SQLite from "expo-sqlite";

// your entities will be imported here (Car is an example)
import Recipe from "./entities/Recipe";

const config = {
  database: "mydatabase",
  driver: SQLite,
  entities: [Recipe], // your entities will be added here (Car is an example)
  synchronize: true,
  type: "expo",
};

export default config;