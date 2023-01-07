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
const hogehuga = "ほげふが";
const hogeFuga = "ほげふが";
const hoge_fuga = "ほげふが";
const hoge1 = "ほげ1";
const $hoge = "ほげ";
// const 2hoge = "2ほげ"; Uncaught SyntaxError: Invalid or unexpected token
// const const = "予約語"; Uncaught SyntaxError: Unexpected token 'const'

/**
 * 変数の型
 */

let undef;
const str = "文字列";
const num = 1;
const bool = true;
const bigInt = 123n;
const symbol = Symbol("シンボル");

const obj = {
  name: "オブジェクト",
  age: 1,
};
function func() {
  console.log("func関数");
}
const nullValue = null;

console.log(typeof undef); // undefined
console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bool); // boolean
console.log(typeof bigInt); // bigint
console.log(typeof symbol); // symbol
console.log(typeof obj); // object
console.log(typeof func); // function
console.log(typeof nullValue); // object
