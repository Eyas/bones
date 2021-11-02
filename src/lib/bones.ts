import { CivilDate } from "./civil-date";

export enum BonesDayType {
    NO_FORECAST = 0,
    NO_BONES = 1,
    INDETERMINATE = 2,
    BONES = 3,
  }
  
  export type DayData = {
    date: CivilDate;
    cite?: string;
    message?: string;
  } & (
    | {
        forecast: BonesDayType.NO_BONES | BonesDayType.BONES;
      }
    | {
        forecast: BonesDayType.INDETERMINATE;
        closestDeterminateForecast: BonesDayType.NO_BONES | BonesDayType.BONES;
      }
  );