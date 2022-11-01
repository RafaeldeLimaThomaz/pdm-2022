import { EntitySchema } from "typeorm";

const Ingredient = new EntitySchema({
  name: "Ingredient", // Entity name (your "Model")
  tableName: "ingredient", // database table
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

export default Ingredient;