import { CivilDate } from "../lib/civil-date";

function a(...d: DayData[]): DayData[] {
  return d;
}

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

export type Data = {
  possibleForecats: {
    [k: number]: string;
  };
  allTime: DayData[];
};

const allTime: DayData[] = a(
  {
    date: new CivilDate(2021, 10, 28),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7024110833995205893",
  },
  {
    date: new CivilDate(2021, 10, 26),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7023371588124921093",
  },
  {
    date: new CivilDate(2021, 10, 25),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7023004798215539973",
  },
  {
    date: new CivilDate(2021, 10, 23),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7022251358833118469",
  },
  {
    date: new CivilDate(2021, 10, 22),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7021895192559111430",
  },
  {
    date: new CivilDate(2021, 10, 21),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7021511892824820997",
  },
  {
    date: new CivilDate(2021, 10, 18),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7020411242749758725",
  },
  {
    date: new CivilDate(2021, 10, 17),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7020027193216503046",
  },
  {
    date: new CivilDate(2021, 10, 16),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7019702064829697285",
  },
  {
    date: new CivilDate(2021, 10, 15),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7019298458678856965",
  },
  {
    date: new CivilDate(2021, 10, 14),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7018925390118784262",
  },
  {
    date: new CivilDate(2021, 10, 13),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7018544878183320837",
  },
  {
    date: new CivilDate(2021, 10, 11),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7017803606308965637",
  },
  {
    date: new CivilDate(2021, 10, 9),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7017075369505213702",
  },
  {
    date: new CivilDate(2021, 10, 7),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7016326380820401414",
  },
  {
    date: new CivilDate(2021, 10, 4),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7015223171011857670",
  },
  {
    date: new CivilDate(2021, 10, 1),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7014096448493079814",
  },
  {
    date: new CivilDate(2021, 9, 29),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7013363016121044229",
  },
  {
    date: new CivilDate(2021, 9, 22),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7010754857476885766",
  },
  {
    date: new CivilDate(2021, 9, 14),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7007786296059940101",
  },
  {
    date: new CivilDate(2021, 9, 5),
    forecast: BonesDayType.INDETERMINATE,
    closestDeterminateForecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7004453353946189062",
    message: "There's a ... hint? of bones.",
  },
  {
    date: new CivilDate(2021, 8, 21),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/6998871742793993478",
  },
  {
    date: new CivilDate(2021, 8, 13),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/6995925135182056709",
  },
  {
    date: new CivilDate(2021, 3, 11),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/6938547829673626885",
  },
  {
    date: new CivilDate(2020, 9, 9),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/6870545437628173573",
  }
);
allTime.sort((a, b) => -CivilDate.sort(a.date, b.date));

export const bones: Data = {
  possibleForecats: {
    [BonesDayType.NO_BONES]: "NO_BONES",
    [BonesDayType.INDETERMINATE]: "INDETERMINATE",
    [BonesDayType.BONES]: "BONES",
  },
  allTime,
};
