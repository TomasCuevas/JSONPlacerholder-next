import { UserInterface } from "./user";

export interface PostInterface {
  body: string;
  id: number;
  title: string;
  user?: UserInterface;
  userId: number;
}
