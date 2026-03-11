import { z } from "zod";

// Schema
export const CatSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const NewCatSchema = CatSchema.omit({ id: true }).required();

// Types
export type Cat = z.infer<typeof CatSchema>;
export type NewCat = z.infer<typeof NewCatSchema>;
