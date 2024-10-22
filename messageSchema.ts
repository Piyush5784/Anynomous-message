import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, "Content must be at least 10 charcters")
    .max(300, "Content must be no longer than 300 charcters"),
});
