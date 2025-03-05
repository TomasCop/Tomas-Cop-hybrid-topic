import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const client = neon("postgresql://neondb_owner:npg_lVBv1Tr2qeXy@ep-muddy-unit-a26yba7p-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require");
export const db = drizzle({ client, schema });
