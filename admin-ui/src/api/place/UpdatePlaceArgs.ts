import { PlaceWhereUniqueInput } from "./PlaceWhereUniqueInput";
import { PlaceUpdateInput } from "./PlaceUpdateInput";

export type UpdatePlaceArgs = {
  where: PlaceWhereUniqueInput;
  data: PlaceUpdateInput;
};
