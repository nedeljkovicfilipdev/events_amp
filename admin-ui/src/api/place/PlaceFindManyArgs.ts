import { PlaceWhereInput } from "./PlaceWhereInput";
import { PlaceOrderByInput } from "./PlaceOrderByInput";

export type PlaceFindManyArgs = {
  where?: PlaceWhereInput;
  orderBy?: Array<PlaceOrderByInput>;
  skip?: number;
  take?: number;
};
