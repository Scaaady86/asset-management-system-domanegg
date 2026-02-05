import { boolean, integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const assets = pgTable('assets', {
  id: serial().primaryKey(),
  name: text().notNull(),
  age: integer().default(0),
  inUse: boolean().notNull(),
  inUseSince: timestamp ({withTimezone: true}).defaultNow(),
})
