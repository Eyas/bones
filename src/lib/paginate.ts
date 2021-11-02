export function paginate<T>(items: T[], pageSize:number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < Math.ceil(items.length / pageSize); i++) {
        result.push(items.slice(i * pageSize, (i + 1) * pageSize));
    }
    return result;
}
