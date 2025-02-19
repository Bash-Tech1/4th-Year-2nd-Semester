import { z, defineCollection } from "astro:content";

const questionSchema = z.object({
  question: z.string(),
  options: z.array(z.string()),
  answer: z.string(),
});

const lectureSchema = z.object({
  id: z.number(),
  title: z.string(),
  questions: z.array(questionSchema),
});

const lecturesCollection = defineCollection({
  type: "data",
  schema: lectureSchema,
});

export const collections = { lectures: lecturesCollection };
