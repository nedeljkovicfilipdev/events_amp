import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlaceWhereUniqueInput } from "../place/PlaceWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  placeId?: PlaceWhereUniqueInput;
  username?: StringFilter;
};
