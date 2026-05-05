import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";


// This line loads your variables from .env.local
dotenv.config({
  path: ".env.local",
});

export default defineConfig({
  dialect: "postgresql",
schema: './src/db/schema/userSchema.ts',
  out: "./drizzle",
   dbCredentials: {
    url: process.env.DATABASE_URL!,
  },

});
