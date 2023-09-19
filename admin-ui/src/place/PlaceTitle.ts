import { Place as TPlace } from "../api/place/Place";

export const PLACE_TITLE_FIELD = "name";

export const PlaceTitle = (record: TPlace): string => {
  return record.name?.toString() || String(record.id);
};
