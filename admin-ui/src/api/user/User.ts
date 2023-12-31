import { Place } from "../place/Place";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  placeId?: Place | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
