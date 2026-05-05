import { serial, text, pgTable } from "drizzle-orm/pg-core";

export const mySchemaUsers = pgTable('users', {
  id: serial('id').primaryKey(),
  jsonMockResponse: text('json_mock_response').notNull(),
  jobPosition: text('job_position').notNull(),
  jobDescription: text('job_description').notNull(),
  jobExperience: text('job_experience').notNull(),
  createdBy: text('created_by').notNull(),
  createdAt:text('created_at').notNull(),
  mockId:text('mock_id').notNull(),
});
