import { CivilDate } from "./civil-date";

export class Calendar {
    private readonly years: Year[];

    constructor(readonly from: CivilDate, readonly to: CivilDate) {
        this.years = [];

        let cYear: Year = {year: -1, months: []};
        let cMonth: Month = { month: -1, days: [], firstStartsOn: 1};

        let cur = from;
        while (cur.before(to)) {
            if (cur.y != cYear.year) {
                cYear = {
                    year: cur.y,
                    months: []
                };
            }
            if (cur.m != cMonth.month) {
                cMonth = {
                    month: cur.m,
                    days: [],
                    firstStartsOn: dayOfWeek(new CivilDate(cur.y, cur.m, 1)),
                };
                cYear.months.push(cMonth);
            }
            cMonth.days.push(cur);

            // Increment by 1 day
            const daysThisMonth = daysInMonth(cur.m, cur.y);
            if (cur.d < daysThisMonth) {
                cur = new CivilDate(cur.y, cur.m, cur.d + 1);
            } else if (cur.m < 12) {
                cur = new CivilDate(cur.y, cur.m + 1, 1);
            } else {
                cur = new CivilDate(cur.y + 1, 1, 1);
            }
        }
    }

    getCalendar(): readonly Year[] {
        return this.years;
    }
}

export interface Year {
    readonly year: number;
    readonly months: Month[];
}

export interface Month {
    readonly month: number;
    readonly days: CivilDate[];
    readonly firstStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

function daysInMonth(month: number, year: number): number {
    if (month == 2) {
        return leapYear(year) ? 29 : 28;
    }
    //          x    J    F    M   A   M   J   J   A   S   O   N   D
    const v = [null, 31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    if (!v) throw new Error(`Unexpected month ${month}`);
    return v;
}

/**
 * Returns the day of week as integer between [0, 6].
 * 
 * Sunday = 0, Saturday = 6.
 */
function dayOfWeek(date: CivilDate): 0 | 1 | 2 | 3 | 4 | 5 | 6 {
    const YY = date.y % 100;
    const yearRem = date.y % 4;
    const yearDiv = Math.floor(YY / 4);

    const magic = date.d
        + monthMagic[leapYear(date.y) ? "leap" : "normal"][date.m]
        + yearMagic[yearRem]
        + YY;
    
    const remainder = magic % 7;
    return remainder as 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

function leapYear(year: number): boolean {
    if (year % 4 != 0) {
        return false;
    } else if (year % 400 == 0) {
        return true;
    } else if (year % 100 == 0) {
        return false;
    } else {
        return true;
    }
}

const monthMagic = {
    normal: {
        1: 0,
        2: 3,
        3: 3,
        4: 6,
        5: 1,
        6: 4,
        7: 6,
        8: 2,
        9: 5,
        10: 0,
        11: 3,
        12: 5,
    }, leap: {
        1: 6,
        2: 2,
        3: 3,
        4: 6,
        5: 1,
        6: 4,
        7: 6,
        8: 2,
        9: 5,
        10: 0,
        11: 3,
        12: 5,
    }
} as const;

const yearMagic = {
    0: 6, 1: 4, 2: 2, 3: 0
}