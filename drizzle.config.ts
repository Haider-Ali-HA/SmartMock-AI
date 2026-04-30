import * as dotenv from "dotenv";
import { defineConfig } from 'drizzle-kit';

// This line loads your variables from .env.local
dotenv.config({
  path: ".env.local",
});
export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema*',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
