
// Section 1: Variables 

1.
var a = 10;
a = 15;
console.log(a); //answer is 15 because a is comes under the reuse and reintilization rule
2.

// let b = 20;
// let b = 30;  //Redeclaration is not acceptable in let 

3.

const c = 50;
console.log(c); //50 ,it is constant 

4.

// const x = 10;
// x = 20;   //it is error ,because const is not accepted in reuse and reinitilization


5.

var p = 5;
var p = 10;
console.log(p); // answer is 10 because (p) its a Redeclaration 

6.

let q = 25;
q = q + 10;
console.log(q);//35 , q is reuse in let  q=25+10=(35)


7.

const r = 7;
console.log(r + 3); //10 ,r=7+3=10
 
8.

// ___ a = 10; var


// Section 2: Console Methods (9–12)


// 9
// Console.log()
// 10.
// console.warn()
// 11.
// console.error()

12.

// console.clear() // its clear all previous values


// Section 3: Data Types (13–18)

13.
let x = "hello";
console.log(typeof x); //String

14.

let b = 100;
console.log(typeof b); //Number

15.

let s = false;
console.log(typeof s); //Bollean

16.

let d;
console.log(d); //Undefined

17.
// null is a Object type, Because (typeof null)gives object only.

18.

let str="25";
  let num= Number(str)
console.log(num);


//  Section 4: Arrays (19–24)

19.

let Arrays = ["apple","Dragonfruit","Pomegranate"] // 3 Fruits

20.

// let arr = ["a","b","c"];
// console.log(arr[1]); //B is answer , because 3 value is there a is 0 b is 1 and c is a 3 

21.

// let arr = ["x","y","z"];
// console.log(arr[arr.length-1]); //Z is answer, Becasue 3 value is there X is 0 Y is 1 and Z is a 3 length is the 4th value so length-1 we got Z

22.

// let arr = ["S","p","k","N","A"]
// console.log(arr[0]); // S is answer ,Totally 5 elements is there in array its start with 0 ,So we need call 1st element inside of []call 0 is enough.


23.

// let arr = ["apple","banana"];
// console.log(arr.length); // 2 is answer, Because totally 2 value is there do it starts with 0 , Apple is 0, banana is 1 and the length is 2


24.

let arr = ["apple","banana"];
arr.push("orange");
console.log(arr); //answer is ["apple","banana","orange"]


// Section 5: Objects (25–28)

25.

const person ={
    name : "Surya",
     age: 23
}

26.

// let obj = {name:"Surya"};
// console.log(obj.name); //Surya is answer

27.

// let obj = {
//   fruits: ["apple","banana"]
// };
// console.log(obj.fruits[1]); // Banana is answer , because 2 value is there apple is 0, banana is a 1 and lenght is 2 so fruit 1 is Banana.

28.

let obj = {
    fruit:["apple","Dragonfruit","Pomegranate"] }
    console.log(obj.fruit[obj.fruit.length-1]);


    //  Section 6: Arithmetic Operators (29–32)


    29.

    console.log(5 + 3); //answer is 8 because it is addition method

    30.
    
    console.log(10 % 3); //answer is 1 , because 3 is 3times in a 10 it means 3*3=9 so remaining 1 is there.

    31.

    console.log(2**3); //Answer is 8 , 2*2*2=8  (2*2=4,4*2=8)it multiply 2 into 3 times.

    32.

    console.log(10 / 2); //answer is 5, it is a divition method


    //  Section 7: Increment / Decrement (33–36)


33.

let w= 5;
w++;
console.log(w); //Answer is 6 , w=5+1=6

34.

let f = 5;
let g = f++; //
console.log(f); //g=5 =f++ so f=5+1=6, g is dosen't value to next line so G is caught the till the value of 5
console.log(g); //g=5

35.

let n = 5;
let m = n++; // n++=5+1=6 , m find the value of till the value of element so n only cosider n value is 5 so M=5
console.log(n); //n++ = 5+1 =6 
console.log(m); //m=5

36.

let i = 3;
let l = i--;
console.log(i); //i-- = 3-1 =2 so i=2
console.log(l); //now l consider the till value side of i so l=3(L=3)



// Section 8: Comparison & Logical (37–39)


37.

console.log(5 == "5"); //True , becasue it check the value only not data type so it consider 5 only.

38.

console.log(5 === "5"); //False , Because it check both value and datatype , if both are same means it gives true otherwise false only


39.

console.log(true && false || true); //True , Because true && false = (fasle) anyone  value getting false means its false based on the AND method and next is false || true means In OR method if any one value getting true means it full of true , So the answer is True.


// Section 9: Ternary (40)

40.

5 > 3 ? console.log("Yes") : console.log("No"); //Answer is Yes , Because the 5 is greater than 3 so yes statement is activate.