import { BonesDayType, DayData } from "../lib/bones";
import { CivilDate } from "../lib/civil-date";

function a(...d: DayData[]): DayData[] {
  return d;
}

export type Data = {
  possibleForecats: {
    [k: number]: string;
  };
  allTime: DayData[];
};

const allTime: DayData[] = a(
  {
    date: new CivilDate(2022, 1, 1),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7048271702387739910",
  },
  {
    date: new CivilDate(2021, 12, 31),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7047890544210496773",
  },
  {
    date: new CivilDate(2021, 12, 28),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7046779675493895430",
  },
  {
    date: new CivilDate(2021, 12, 25),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7045657418432285957",
  },
  {
    date: new CivilDate(2021, 12, 21),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7044174342799789318",
  },
  {
    date: new CivilDate(2021, 12, 20),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7043809322018557189",
  },
  {
    date: new CivilDate(2021, 12, 18),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7043061913114119429",
  },
  {
    date: new CivilDate(2021, 12, 16),
    forecast: BonesDayType.INDETERMINATE,
    closestDeterminateForecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7042308571643514118",
  },
  {
    date: new CivilDate(2021, 12, 15),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7041944285268184325",
  },
  {
    date: new CivilDate(2021, 12, 13),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7041221365935934725",
  },
  {
    date: new CivilDate(2021, 12, 12),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7040833887395712261",
  },
  {
    date: new CivilDate(2021, 12, 10),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7040088885635894533",
  },
  {
    date: new CivilDate(2021, 12, 9),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7039717595007683845",
  },
  {
    date: new CivilDate(2021, 12, 8),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7039331413455490350",
  },
  {
    date: new CivilDate(2021, 12, 6),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7038604400016837893",
  },
  {
    date: new CivilDate(2021, 12, 4),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7037869076139543813",
  },
  {
    date: new CivilDate(2021, 12, 3),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7037487216548924678",
  },
  {
    date: new CivilDate(2021, 12, 2),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7037119231531470086",
  },
  {
    date: new CivilDate(2021, 11, 30),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7036373611187277061",
  },
  {
    date: new CivilDate(2021, 11, 29),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7036002855471418629",
  },
  {
    date: new CivilDate(2021, 11, 27),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7035264187450412293",
  },
  {
    date: new CivilDate(2021, 11, 25),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7034536859455819013",
  },
  {
    date: new CivilDate(2021, 11, 24),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7034153718278933765",
  },
  {
    date: new CivilDate(2021, 11, 23),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7033774353791601926",
  },
  {
    date: new CivilDate(2021, 11, 22),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7033413331775950085",
  },
  {
    date: new CivilDate(2021, 11, 21),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7033034538523610373",
  },
  {
    date: new CivilDate(2021, 11, 19),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7032301423278738694",
  },
  {
    date: new CivilDate(2021, 11, 18),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7031918628782017798",
  },
  {
    date: new CivilDate(2021, 11, 16),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7031187804289912069",
  },
  {
    date: new CivilDate(2021, 11, 15),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7030808551417236741",
  },
  {
    date: new CivilDate(2021, 11, 12),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7029702975224417541",
  },
  {
    date: new CivilDate(2021, 11, 11),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7029337289553693958",
  },
  {
    date: new CivilDate(2021, 11, 9),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7028597285869128966",
  },
  {
    date: new CivilDate(2021, 11, 8),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7028212495621934342",
  },
  {
    date: new CivilDate(2021, 11, 7),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7027831943009930502",
  },
  {
    date: new CivilDate(2021, 11, 5),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7027092093080325382",
  },
  {
    date: new CivilDate(2021, 11, 4),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7026722598096538886",
  },
  {
    date: new CivilDate(2021, 11, 3),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7026343071839276294",
  },
  {
    date: new CivilDate(2021, 11, 2),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7025988024450223366",
  },
  {
    date: new CivilDate(2021, 11, 1),
    forecast: BonesDayType.NO_BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7025602864663907590",
  },
  {
    date: new CivilDate(2021, 10, 31),
    forecast: BonesDayType.BONES,
    cite: "https://www.tiktok.com/@jongraz/video/7025224724321946885",
  },
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
