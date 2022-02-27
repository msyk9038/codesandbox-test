/**
 * const, let の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // 行末のセミコロンは必ずつけないとまずい
// // https://qiita.com/igayamaguchi/items/ac48b7e12890351ee55a

// // var 変数は上書き可能
// val1 = "hogehoge";
// console.log(val1);

// // var 再宣言可能
// var val1 = 0;
// console.log(val1);

// コメントアウトしたい範囲を選択して，Ctrl + / でコメントアウト可能

// let val2 = "let_var";
// console.log(val2);

// // let は上書き可能
// val2 = "test";
// console.log(val2);

// // letは再宣言できない
// //let val2 = "niku";

// //single Quote is OK
// let val12 = "test";
// console.log(val12);

// // const は上書きも再宣言もできない
// const c = "hoge";
// console.log(c);

// c = 'fuga';
// const c = 'fuga';

// const でオブジェクトを定義すると，中身は変えられる
// const val4 = {
//   name: "hoge",
//   age: 28
// };
// val4.name = "fuga";
// val4.address = "earch";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "niku";
// val5.push("yasai"); // push は配列に要素を追加
// console.log(val5);

// ### 基本的に const を使っていく．上書きしたいものを let 宣言する．

// ============================================================
// ============================================================
/**
 * テンプレート文字列
 */

// const name = "hoge";
// const age = 28;
// // 「myname is hoge desu. age is 28.」

// // old type
// const msg1 = "myname is " + name + " desu. age is " + age + ".";
// console.log(msg1);

// // new type template literal
// const msg2 = `myname is ${name} desu. age is ${age} .`;
// console.log(msg2);

// ============================================================
// ============================================================

/**
 * アロー関数
 */

// old
// function func1(str) {
//   return str;
// }
// console.log(func1("test"));
// // or
// const func2 = function (str) {
//   return str;
// };
// console.log(func2("hoge"));

// // new
// // const func3 = (str) => {
// //   return str;
// // };
// const func3 = str => str + 'hoge'; // 一行だけならこんな書き方もできる
// console.log(func3("fuga"));

// const func4 = (num1, num2) => num1 + num2;
// console.log(func4(3,4));

// ============================================================
// ============================================================

/**
 * 分割代入
 */

//  const myProfile = {
//    name: "John",
//    age: 28,
//  };

// old
//  const msg3 = `name is ${myProfile.name}. age is ${myProfile.age}.`
//  console.log(msg3)

// new
//  const {name, age} = myProfile;
//  const msg4 = `name is ${name}, age is ${age}`
//  console.log(msg4)

// array : old
// const myProf = ['john', 38];
// const msg5 = `name is ${myProf[0]}, age is ${myProf[1]}`;
// console.log(msg5)

// // array : new
// const [name, age] = myProf;
// const msg6 = `name is ${name}, age is ${age}`;
// console.log(msg6)

// ============================================================
// ============================================================

/**
 * default-value
 */

// const sayHello = (name='tako') => console.log(`Hello, ${name}.`)
// sayHello('unko');
// sayHello();

// ============================================================
// ============================================================

/**
 * spread-structure ...
 */
// 配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (x, y) => x+y;
// console.log(sumFunc(1,2));
// console.log(sumFunc(...arr1));

// // まとめる
// const arr2 = [1,2,3,4,5];
// const [testa,testb,testc,testd,teste] = arr2;
// console.log(testa);
// const [neko, ...inu] = arr2;
// console.log(inu);

// 配列のコピー，結合
// const arr4 = [10,20];
// const arr5 = [1,2];
// const arr6 = [...arr4, ...arr5];
// console.log(arr6);

// 単なるコピーは参照渡し
// const arr7 = arr4;
// console.log(arr7);
// arr4[0] = 100;
// console.log(arr7);

// ============================================================
// ============================================================

/**
 * map, filter を使った配列処理
 */

// const nameArr = ['niku', 'kome', 'yasai'];

// //old
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// //new
// //---
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })

// console.log(nameArr2);
// //---
// nameArr.map((name)=>console.log(name))

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr)
// numArr.filter(num => console.log(num % 2 === 1));
// 条件分岐は === を使う．==ではない

// enumerate を実現する
// const nameArr = ['hoge', 'figa', 'foo', 'bar'];
// nameArr.map((name, idx) => console.log(`No.${idx} is ${name}`));

// const nameArr = ['hoge', 'fuga', 'foo', 'bar'];
// const newArr = nameArr.map((name)=>{
//   if(name === 'hoge'){
//     return `${name}${name}`
//   } else{
//     return `${name}!!`
//   }
// })
// console.log(newArr);

// ============================================================
// ============================================================

/**
 * 参考演算子
 */

// ある条件 ? 条件がtrueの時 : 条件がfalse の時

// const val1 = (1 > 0) ? 'true' : 'false'
// console.log(val1)

// let num = 1300000;
// num = "1300"
// console.log(num.toLocaleString());

// num = 13000000;
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : 'input number';
// console.log(formattedNum)

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? num1+num2 : 'in range.';
// }
// console.log(checkSum(500,40));

// ============================================================
// ============================================================

/**
 * 論理演算子の本当の意味 && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2){
//   console.log('1or2 is true');
// }

// if (flag1 && !flag2){
//   console.log('1and2 is true');
// }

// // || の左側がfalseなら右側を返す
// const num = null;
// const fee =  num || '金額未設定です'
// console.log(fee)

// // && の左側がtrueなら右側を返す
// const num2 = null;
// const hoge = num2 && 'hoge'
// console.log(hoge)

// ============================================================
// ============================================================
