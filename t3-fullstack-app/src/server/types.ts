import { z } from "zod";

export const todoInput = z.string({
    required_error: 'Describe your todo',
}).min(1).max(50);