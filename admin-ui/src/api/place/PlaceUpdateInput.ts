import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlaceUpdateInput = {
  about?: string | null;
  name?: string;
  sortOf?: string;
  userKey?: UserWhereUniqueInput | null;
};
