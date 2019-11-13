import {func, number} from "prop-types";
// import * as React from "react";
// import {super} from "@babel/types";
//
// export interface LabelledValue {
//     label: string
// }
//
// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label)
// }
//
// printLabel({label: '1'});
//
// interface SquareConfig {
//     color?: string,
//     width?: number,
//     // [propName: string]: any
// }
//
// function createSquare(square: SquareConfig): { color: string, area: number } {
//     let newSquare = {color: 'white', area: 100};
//
//     if (square.width) {
//         newSquare.area = square.width * square.width;
//     }
//
//     if (square.color) {
//         newSquare.color = square.color;
//     }
//
//     return newSquare;
// }
//
// interface point {
//     readonly x: string,
//     readonly y: string
// }
//
// let squareOptions = {colour: 'white', width: 123};
// let mySquare = createSquare({colour: 'white', width: 123} as SquareConfig);
// let mySquare2 = createSquare(squareOptions);
// let a: point = {x: '1', y: '2'};
// let ar: number[] = [1, 2, 3];
// let ro: ReadonlyArray<number> = [2, 3, 4];
// ar = ro as number[];
//
// interface searchFunc {
//     (paramA: string, paramB: string): boolean
// }
//
// let testFunc: searchFunc;
// testFunc = function (a, b) {
//     return a === b
// }
//
// interface StringArray {
//     [index: number]: string
// }
//
// let testStringArray: StringArray = ['1'];
//
// class Animal {
//     name: string | undefined;
// }
//
// class Dog extends Animal {
//     breed: string | undefined;
// }
//
// // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//     [x: number]: Animal;
//
//     [x: string]: Dog
// }
//
// interface NumberDictionary {
//     length: number;    // 可以，length是number类型
//     // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
//     readonly [index: string]: number;
// }
//
// let x: NumberDictionary = {length: 3};
// x.length = 4;
//
// interface ClockInterface {
//     currentTime: Date;
//
//     setTime(d: Date): void;
// }
//
// class Clock implements ClockInterface {
//     currentTime: Date;
//
//     setTime(d: Date): void {
//
//     };
//
//     constructor() {
//         this.currentTime = new Date();
//     }
// }
//
// interface ClockConstructor {
//     new(hour: number, minute: number): ClockInterface2;
// }
//
// interface ClockInterface2 {
//     tick(): void;
// }
//
// function createClock(clor: ClockConstructor, hour: number, minute: number): ClockInterface2 {
//     return new clor(hour, minute);
// }
//
// class DigitalClock implements ClockInterface2 {
//     constructor(h: number, m: number) {
//     }
//
//     tick() {
//         console.log("beep beep");
//     }
// }
//
// class AnalogClock implements ClockInterface2 {
//     constructor(h: number, m: number) {
//     }
//
//     tick() {
//         console.log("tick tock");
//     }
// }
//
// let digital = createClock(DigitalClock, 12, 12);
//
// interface Shape {
//     color?: string
// }
//
// interface PenStroke {
//     width: number
// }
//
// interface Square22 extends Shape, PenStroke {
//     length: number
// }
//
// let s123: Square22 = {color: 'yellow', length: 123, width: 120};
// s123.length = 123;
//
// //既是函数，又是对象
// interface Counter {
//     (num: number): string,
//
//     setNum(): void,
//
//     x: string
// }
//
// // function getCounter(): Counter {
// //     let counter = <Counter>function (start: number){};
// //     counter.setNum = function();
// //     counter.x = '1';
// //
// //         return counter;
// // };
//
// class Control {
//     private state: string;
//
//     constructor() {
//         this.state = '1'
//     }
// }
//
// interface SelectableControl extends Control {
//     select(): void;
// }
//
// class Button extends Control implements SelectableControl {
//     select(): void {
//         console.log(1);
//     };
// }
//
// class Button2 extends Control {
//     select() {
//
//     }
// }
//
// let testButton: SelectableControl = new Button();
//
//
// class Greeter {
//     greeting: string;
//
//     constructor(message: string) {
//         this.greeting = message
//     }
//
//     greet() {
//         return "hello: " + this.greeting;
//     }
// }
//
// class Animals {
//     move(step: number = 0) {
//         console.log(step);
//     }
// }
//
// class Dogs extends Animals {
//     dark() {
//         console.log("wolf")
//     }
// }
//
// let dog = new Dogs();
// dog.move(10);
//
// class Animalss {
//     private name: string;
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
//     move(step: number = 10) {
//         console.log(this.name + step);
//     }
// }
//
// class CopyAnimalss {
//     private name: string;
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
//     move(step: number = 10) {
//         console.log(this.name + step);
//     }
// }
//
// class Monkey extends Animalss {
//     constructor(name: string) {
//         super(name);
//     }
// }
//
// class Horse extends Animalss {
//     private age: number;
//     protected width: number;
//
//     constructor(name: string) {
//         super(name);
//         this.age = 10;
//         this.width = 10;
//     }
//
//     move(step: number = 20) {
//         console.log(this.age);
//         super.move(step);
//     }
// }
//
// let horse: Animalss = new Horse('tom');
// horse.move(100);
// horse.width
//
// let anim = new Animalss('test');
// let mon = new Monkey('test2');
// let copy = new CopyAnimalss('test3');
//
// class TestReadOnly {
//
//     constructor(readonly name: string, public age: number, private width: number, protected height: number) {
//         console.log(name);
//     }
// }
//
// let newTest = new TestReadOnly('159', 123, 111, 222);
//
// class Employee {
//     static origin: {
//         x: 1
//     }
//     private _fullName: string;
//     get fullName(): string {
//         return this._fullName;
//     }
//
//     set fullName(name: string): void {
//         if (name === '123') {
//             this._fullName = '456'
//         } else {
//             this._fullName = name;
//         }
//     }
//
//     constructor() {
//         this._fullName = ''
//     }
// }
//
// let newEmployee = new Employee();
// console.log(newEmployee.fullName)
// newEmployee.fullName = '111';
// console.log(newEmployee.fullName)
// newEmployee.fullName = '123';
// console.log(newEmployee.fullName)
//
// abstract class People {
//     abstract cry(): void;
// }
//
// class Tom extends People {
//     cry(): void {
//
//     }
//
//     laugh(): void {
//
//     }
// }
//
// let li: typeof Tom = Tom;
// // li.cry();
// // li.laugh();
//
// function buildName(firstName: string, lastName: string = '2'): string {
//     return firstName + lastName
// }
//
// let buildName2: (a: string, b: string) => string = function (a: string, b: string = 'a') {
//     return a + b
// }
//
// function buildName3(a: string, ...rest: string[]): string {
//     return rest.join(',');
// }
//
// let build = buildName3('1', '2', '3');
//
// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function () {
//         // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
//
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }
//
// function reLoading(x: number): { x: number };
// function reLoading(x: { x: number }): number;
// function reLoading(x: any) {
//     if (typeof x === 'number') {
//         return {x};
//     }
//     if (typeof x === 'object') {
//         return x.x;
//     }
// };
//
// function identity<T>(str: T): T {
//     return str;
// }
//
// function identity2<T>(arr: T[]): T[] {
//     return arr;
// }
//
// interface Identity {
//     <N>(x: N): N
// }
//
// interface Identity2<NN> {
//     (x: NN): NN
// }
//
// let outPut = identity<string>('123');
// let myIdentity: <t>(str: t) => t = identity;
// let myIdentity2: { <t>(str: t): t } = identity;
// let myIdentity3: Identity = identity;
// let myIdentity4: Identity2<number> = identity;
//
// class IdentityClass<T> {
//     zeroValue: T | undefined;
//     add: { (x: T, y: T): T } | undefined;
//     // minus: (a: T, b: T) => T | undefined;
// }
//
// let myClass = new IdentityClass<number>();
// myClass.zeroValue = 1;
// myClass.add = function (x, y) {
//     return x + y;
// };
//
// interface testLength {
//     length: number;
//
//     [props: string]: any
// }
//
// function identity3<T extends testLength>(arr: T): number {
//     return arr.length;
// }
//
// identity3({length: 3});
//
// function getProperty(obj: testLength, key: string) {
//     return obj[key];
// }
//
// function create<A>(C: { new(): A }): A {
//     return new C()
// }
//
// class BeeKeeper {
//     hasMask: boolean;
// }
//
// class ZooKeeper {
//     nametag: string;
// }
//
// class Animal2 {
//     numLegs: number;
// }
//
// class bee extends Animal2 {
//     keeper: BeeKeeper;
//
//     constructor() {
//         super();
//         this.numLegs;
//     }
// }
//
// class Zoo extends Animal2 {
//     keeper: ZooKeeper;
// }
//
// function createInstance<A extends Animal2>(c: new() => A): A {
//     return new c();
// }
//
// createInstance(bee).keeper.hasMask;
// createInstance(Zoo).keeper.nametag;
//
// function foo(x: number) {
//     if (x !== 1 || x !== 2) {
//         //         ~~~~~~~
//         // Operator '!==' cannot be applied to types '1' and '2'.
//     }
// }
//
// interface Square {
//     kind: 'square';
//     size: number;
// }
//
// interface Circle {
//     kind: 'circle';
//     radius: number;
// }
//
// interface Tri {
//     kind: 'Tri';
//     width: number;
// }
//
// type Shape1 = Square | Circle | Tri;
//
// function area(x: Shape1) {
//     switch (x.kind) {
//         case "circle":
//             break;
//         case "square":
//             break;
//         case "Tri":
//             break;
//     }
// }
//
// class BasicCalculator {
//     constructor(protected  value: number = 0) {
//         this.value = value;
//     }
//
//     public currentValue() {
//         return this.value;
//     }
//
//     public add(operand: number): this {
//         this.value += operand;
//         return this;
//     }
//
//     public multiple(operand: number): this {
//         this.value *= operand;
//         return this;
//     }
// }
//
// let cal = new BasicCalculator(1).add(1).multiple(2).currentValue();
//
// class ScientificCalculator extends BasicCalculator {
//     constructor(value = 0) {
//         super(value);
//     }
//
//     public sin() {
//         this.value = Math.sin(this.value);
//         return this;
//     }
// };
//
// let cal2 = new ScientificCalculator(3).add(3).multiple(3).sin();
//
// function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
//     return names.map(k => o[k]);
// }
//
// interface Person {
//     name: string;
//     age: number;
// }
//
// let person: Person = {
//     name: 'Jarid',
//     age: 35
// };
//
// let strings: string[] = pluck(person, ['name']);
//
// type Readonly<T> = {
//     readonly [p in keyof T]: T[p];
// }
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// }
// type Null<T> = {
//     [P in keyof T]: T[P] | null;
// }
// type T00 = Exclude<"a","b">;
// type T01 = Extract<"a","b">;
//
// type readonlyPerson = Readonly<Person>;
// type partialPerson = Partial<Person>;
//
// class C {
//     x = 0;
//     y = 0;
// }
//
// let someValue: any = "this is a string";
//
// let strLength: number = someValue.length;