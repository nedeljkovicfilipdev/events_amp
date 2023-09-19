import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlaceCreateInput = {
  about?: string | null;
  name: string;
  sortOf: string;
  userKey?: UserWhereUniqueInput | null;
};
