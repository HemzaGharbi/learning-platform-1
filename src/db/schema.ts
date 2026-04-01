import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const coursesTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});

export const groupsTable = pgTable("groups", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
});

export const reviewsTable = pgTable("reviews", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  content: varchar({ length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
// we can generate files with migration
// npx drizzle-kit generate
// this commande will create SQL files, wich we can use letter (apply) and generate files migration

// npx drizzle-kit migrate
// we added tihs command in package.json() , and then we can can run with :=>
// npm run db:generate and npm run db:maigrate
