export class Params {
    page: number = 0;
    pageSize: number = 10;
    search: string = '';

    constructor(init?: Partial<Params>) {
        Object.assign(this, init);
    }
}