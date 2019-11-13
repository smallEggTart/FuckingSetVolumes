enum Color {
    green,
    red,
    blue
}

function hasError(message: string): never {
    throw new Error(message);
}

export let isDone: boolean = false;
export let decLiteral: number = 3;
export let hexLiteral: number = 0x1234ef;
export let binaryLiteral: number = 0b10;
export let octalLiteral: number = 0o17;
export let name: string = 'Tom';
export let list: number[] = [1, 2, 3, 4];
export let list2: Array<number> = [2, 3, 4];
export let list3: [string, number] = ['a', 1];
export let list4: Color = Color.blue;
export let notSure: any = '999';
export let notSure2: any[] = [1, 's', []];
export let empty: void = undefined;
export let empty2: undefined = undefined;
export let empty3: null = null;
export let someValue: number = (notSure as string).length;