const monthNames = [
    undefined,
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
function th(day: number): string {
    if (day === 1) {
        return "st";
    } else if (day === 2) {
        return "nd";
    } else if (day === 3) {
        return "rd";
    } else if (day > 20) {
        return th(day-20);
    } else {
        return "th";
    }
}

export class CivilDate {
    constructor(readonly y: number, readonly m: number, readonly d: number) { }

    equals(other: CivilDate): boolean {
        return this.y === other.y && this.m === other.m && this.d === other.d;
    }

    before(other: CivilDate): boolean {
        return this.y < other.y ||
            (this.y === other.y && this.m < other.m) ||
            (this.y === other.y && this.m === other.m && this.d < other.d);
    }

    asIsoString(): string {
        const YYYY = `${this.y}`.padStart(4, '0');
        const MM = `${this.m}`.padStart(2, '0');
        const DD = `${this.d}`.padStart(2, '0');
        return `${YYYY}-${MM}-${DD}`;
    }

    asCommonString(): string {
        return `${monthNames[this.m]} ${this.d}${th(this.d)}`;
    }

    static sort(a: CivilDate, b: CivilDate): number {
        if (a.before(b)) {
            return -1;
        } else if (b.before(a)) {
            return 1;
        } else {
            return 0;
        }
    }

    static fromDate(date: Date): CivilDate {
        return new CivilDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    }

    static today(): CivilDate {
        return CivilDate.fromDate(new Date());
    }
}