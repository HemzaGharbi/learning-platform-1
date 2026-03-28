import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const coursesTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});


// we can generate failes with migration 
// npx drizzle-kit generate 
// this commande will create SQL failes, wich we can use letter (apply) and generate failes migration

// npx drizzle-kit migrate
// we added tihs command in package.json() , and then we can can run with :=>
// npm run db:generate and npm run db:maigrate