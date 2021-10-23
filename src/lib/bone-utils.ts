import { DayData, BonesDayType } from "../data/bones";
import { CivilDate } from "./civil-date";

export function findToday(days: DayData[]): {today: DayData}|{mostRecent: DayData} {
    const t = CivilDate.today();
    const today = days.find(day => day.date.equals(t));
    if (today) {
        return {today};
    }
    return {mostRecent: days[0]};
}

export function shortDesc(day: DayData): string {
    switch (day.forecast) {
        case BonesDayType.NO_BONES: return 'No Bones';
        case BonesDayType.BONES: return 'Bones';
        case BonesDayType.INDETERMINATE:
            switch (day.closestDeterminateForecast) {
                case BonesDayType.NO_BONES: return 'Not Sure (Probably No Bones)';
                case BonesDayType.BONES: return 'Not Sure (Probably Bones)';
            }
    }
}

export function tiktokId(day: DayData): string | undefined {
    if (!day.cite) return undefined;
    
    const r = /https:\/\/www.tiktok.com\/@jongraz\/video\/([^\/]+)\/?/g;
    const m = r.exec(day.cite);

    return m && m[1];
}