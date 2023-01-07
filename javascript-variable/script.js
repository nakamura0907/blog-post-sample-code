/**
 * 変数の宣言
 */
let hoge = "ほげ";
hoge = "ホゲ"; // 再代入が可能です
// 「//」はコメントアウトを表しています

const huga = "フガ";
// huga = "huga"; Uncaught TypeError: Assignment to constant variable.

console.log(hoge); // ホゲ
console.log(huga); // フガ

/**
 * 変数の命名
 */
const hogeFuga = "ほげふが";
const hoge_fuga = "ほげふが";
const hoge1 = "ほげ1";
const $hoge = "ほげ";

// const 2hoge = "2ほげ"; Uncaught SyntaxError: Invalid or unexpected token
// const const = "予約語"; Uncaught SyntaxError: Unexpected token 'const'

// 大文字と小文字は区別されるため、以下のコードはエラーになります
// console.log(hogefuga); Uncaught ReferenceError: hogefuga is not defined

const hogeFuga_piyo = "ほげふがぴよ";
const Hoge_Fuga_piyo = "ほげふがぴよ";

// どちらかに統一すること
const hoge_fuga_piyo = "ほげふがぴよ"; // スネークケース
const hogeFugaPiyo = "ほげふがぴよ"; // キャメルケース

const i = 1; // 短すぎる
const id = 1; // 文脈によってはこれもありかも
const userId = 1;
const userIdentificationNumber = 1; // ID = Identification

/**
 * 変数の型
 */

const str = "文字列";
const num = 1;
const bool = true;
const bigInt = 123n;
const symbol = Symbol("シンボル");
const nullValue = null;

const obj = {
  name: "オブジェクト",
  age: 1,
};
const array = [1, 2, 3];
function func() {
  console.log("func関数");
}

console.log(typeof undefinedVariable); // undefined
console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bool); // boolean
console.log(typeof bigInt); // bigint
console.log(typeof symbol); // symbol
console.log(typeof nullValue); // object

console.log(typeof obj); // object
console.log(typeof array); // object
console.log(typeof func); // function

let hello;
console.log(typeof hello); // undefined
hello = "こんにちは";
console.log(typeof hello); // string
