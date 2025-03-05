
import { uuid, pgTable, varchar, integer, timestamp } from "drizzle-orm/pg-core";

export const pokemonCards = pgTable("pokemon_cards", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 256 }).notNull(),
    supertype: varchar("supertype", { length: 100 }).notNull(),
    level: varchar("level", { length: 10 }),
    hp: varchar("hp", { length: 10 }),
    number: varchar("number", { length: 50 }),
    artist: varchar("artist", { length: 256 }),
    rarity: varchar("rarity", { length: 100 }),
    flavorText: varchar("flavor_text", { length: 1000 }),
    regulationMark: varchar("regulation_mark", { length: 10 }),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at"),
});

export const pokemonSubtypes = pgTable("pokemon_subtypes", {
    id: uuid().primaryKey().defaultRandom(),
    card_id: uuid("card_id").references(() => pokemonCards.id).notNull(),
    subtype: varchar("subtype", { length: 100 }).notNull(),
});
export const pokemonTypes = pgTable("pokemon_types", {
    id: uuid().primaryKey().defaultRandom(),
    card_id: uuid("card_id").references(() => pokemonCards.id).notNull(),
    type: varchar("type", { length: 50 }).notNull(),
});
export const pokemonEvolutions = pgTable("pokemon_evolutions", {
    id: uuid().primaryKey().defaultRandom(),
    card_id: uuid("card_id").references(() => pokemonCards.id).notNull(),
    evolves_from: varchar("evolves_from", { length: 256 }),
    evolves_to: varchar("evolves_to", { length: 256 }),
});
export const pokemonRules = pgTable("pokemon_rules", {
    id: uuid().primaryKey().defaultRandom(),
    card_id: uuid("card_id").references(() => pokemonCards.id).notNull(),
    rule: varchar("rule", { length: 1000 }).notNull(),
});
export const pokemonAncientTraits = pgTable("pokemon_ancient_traits", {
    id: uuid().primaryKey().defaultRandom(),
    card_id: uuid("card_id").references(() => pokemonCards.id).notNull(),
    name: varchar("name", { length: 100 }),
    text: varchar("text", { length: 1000 }),
});
export const pokemonAbilities = pgTable("pokemon_abilities", {
    id: uuid().primaryKey().defaultRandom(),
    card_id: uuid("card_id").references(() => pokemonCards.id).notNull(),
    name: varchar("name", { length: 100 }).notNull(),
    type: varchar("type", { length: 100 }).notNull(),
    text: varchar("text", { length: 1000 }).notNull(),
});
export const pokemonAttacks = pgTable("pokemon_attacks", {
    id: uuid().primaryKey().defaultRandom(),
    card_id: uuid("card_id").references(() => pokemonCards.id).notNull(),
    name: varchar("name", { length: 100 }).notNull(),
    text: varchar("text", { length: 1000 }),
    damage: varchar("damage", { length: 10 }),
    converted_energy_cost: integer("converted_energy_cost"),
});
export const pokemonWeaknesses = pgTable("pokemon_weaknesses", {
    id: uuid().primaryKey().defaultRandom(),
    card_id: uuid("card_id").references(() => pokemonCards.id).notNull(),
    type: varchar("type", { length: 50 }).notNull(),
    value: varchar("value", { length: 10 }).notNull(),
});
export const pokemonResistances = pgTable("pokemon_resistances", {
    id: uuid().primaryKey().defaultRandom(),
    card_id: uuid("card_id").references(() => pokemonCards.id).notNull(),
    type: varchar("type", { length: 50 }).notNull(),
    value: varchar("value", { length: 10 }).notNull(),
});

export const pokemonImages = pgTable("pokemon_images", {
    id: uuid().primaryKey().defaultRandom(),
    card_id: uuid("card_id").references(() => pokemonCards.id).notNull(),
    small: varchar("small", { length: 500 }).notNull(),
    large: varchar("large", { length: 500 }).notNull(),
});

export const pokemonCardmarketPrices = pgTable("pokemon_cardmarket_prices", {
    id: uuid().primaryKey().defaultRandom(),
    card_id: uuid("card_id").references(() => pokemonCards.id).notNull(),
    url: varchar("url", { length: 500 }).notNull(),
    updated_at: varchar("updated_at", { length: 50 }),
    average_sell_price: integer("average_sell_price"),
    low_price: integer("low_price"),
    trend_price: integer("trend_price"),
    reverse_holo_sell: integer("reverse_holo_sell"),
    reverse_holo_low: integer("reverse_holo_low"),
    reverse_holo_trend: integer("reverse_holo_trend"),
});
