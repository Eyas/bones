import { CivilDate } from "./civil-date";

export class Calendar {
    private readonly years: Year[];

    constructor(readonly from: CivilDate, readonly to: CivilDate) {
        this.years = [];

        let cYear: Year = {year: -1, months: []};
        let cMonth: Month = { month: -1, days: [], firstStartsOn: 1, daysInMonth: 28};

        let cur = new CivilDate(from.y, from.m, 1);
        const until = new CivilDate(to.y, to.m, daysInMonth(to.m, to.y));
        while (cur.before(until) || cur.equals(until)) {
            if (cur.y != cYear.year) {
                cYear = {
                    year: cur.y,
                    months: []
                };
                this.years.push(cYear);
            }
            if (cur.m != cMonth.month) {
                cMonth = {
                    month: cur.m,
                    days: [],
                    firstStartsOn: dayOfWeek(new CivilDate(cur.y, cur.m, 1)),
                    daysInMonth: daysInMonth(cur.m, cur.y),
                };
                cYear.months.push(cMonth);
            }
            cMonth.days.push(cur);

            // Increment by 1 day
            if (cur.d < cMonth.daysInMonth) {
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
    readonly daysInMonth: 28|29|30|31;
}

function daysInMonth(month: number, year: number): 28|29|30|31 {
    if (month == 2) {
        return leapYear(year) ? 29 : 28;
    }
    //           x    J    F    M   A   M   J   J   A   S   O   N   D
    const v = ([null, 31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] as const)[month];
    if (!v) throw new Error(`Unexpected month ${month}`);
    return v;
}

/**
 * Returns the day of week as integer between [0, 6].
 * 
 * Sunday = 0, Saturday = 6.
 */
// 1-1-2021
// YY = 21
// yearRem = 1
// yearDiv = 5.25 -> 6
//
// magic = (day: 1) + (magic: 0) + (yearMagic: 4) + (yearDiv: 6) + (yy: 21)
//       = 32
// remainder = 31 % 7 = 4
function dayOfWeek(date: CivilDate): 0 | 1 | 2 | 3 | 4 | 5 | 6 {
	// Zeller's congruence
    const q = date.d;
    const m = date.m;
    const K = date.y % 100;
    const J = Math.floor(date.y / 100);
    const h = (q + Math.floor((13 * (m + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) - 2 * J) % 7;

    // In this case, h = 0 -> Saturday. But we want Sunday = 0.
    return (h + 6) % 7 as 0 | 1 | 2 | 3 | 4 | 5 | 6;
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
