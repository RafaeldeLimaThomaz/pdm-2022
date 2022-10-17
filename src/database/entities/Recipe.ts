import { EntitySchema } from "typeorm";

const Recipe = new EntitySchema({
  name: "Recipe", // Entity name (your "Model")
  tableName: "recipes", // database table
  columns: {
    id: {
      primary: true, // primary key
      type: "int",
      generated: true, // auto-generated
    },
    title: {
      type: "varchar",
    },

  },
});

export default Recipe;