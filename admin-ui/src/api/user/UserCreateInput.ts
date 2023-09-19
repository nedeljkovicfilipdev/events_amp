import { PlaceWhereUniqueInput } from "../place/PlaceWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  placeId?: PlaceWhereUniqueInput | null;
  roles: InputJsonValue;
  username: string;
};
