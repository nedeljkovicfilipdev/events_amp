import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlaceWhereInput = {
  about?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  sortOf?: StringFilter;
  userKey?: UserWhereUniqueInput;
};
