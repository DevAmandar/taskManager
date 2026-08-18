import z from "zod"

export const TitleSchema = z
    .string("Title must be string")
    .trim()
    .nonempty("Title cannot be empty")
    .min(3, "Title must be at least 3 characters")
    .max(20, "Title must be at maximum of 20 characters")

export const TaskSchema = z.object({
    title: z.string().trim().nonempty("Title cannot be empty").min(3, "Title must be at least 3 characters"),
    description: z.string().trim().nonempty("Description cannot be empty").min(3, "Description must be at least 3 characters").max(60, 'Description must be at maximum of 60 characters')
})