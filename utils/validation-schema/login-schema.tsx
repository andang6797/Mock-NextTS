import { object, string } from "yup";

export const loginSchema = object({
  userName: string().required(),
  password: string().required(),
});
