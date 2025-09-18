import { User } from "./User";

export interface Post {
  id: number;
  title: string;
  description: string;
  user: User;
  created_at: string;
}

export type PostDto = Omit<Post, 'id'| 'user' | 'createdAt'>