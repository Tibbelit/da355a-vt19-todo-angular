export class Todo {
    id: number;
    title: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

/*
let todo = new Todo({
    id: 1,
    title: "First Item"
});
*/