import * as SQLite from "expo-sqlite";


// your entities will be imported here (Car is an example)
import Recipe from "./entities/Recipe";
import Ingredient from "./entities/Ingredient";

const config = {
  database: "mydatabase",
  driver: SQLite,
  entities: [Recipe, Ingredient], // your entities will be added here (Car is an example)
  synchronize: true,
  type: "expo",
};

export default config;