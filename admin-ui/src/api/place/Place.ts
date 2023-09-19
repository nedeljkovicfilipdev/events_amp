import { User } from "../user/User";

export type Place = {
  about: string | null;
  createdAt: Date;
  id: string;
  name: string;
  sortOf: string;
  updatedAt: Date;
  userKey?: User | null;
};
