(function(){
  "use strict";

let console = window.console;

/*
let f1 = function(){};
let f2 = function f3() {};
function f4(){}   // this creates a window
*/


/*
// Self invoking function that takes another function as an argument
(function f5(func, num){
  console.log(func() + 10);
}(function(){
  return 5 + 5;
}, 10));
*/

/*
f6();   // does not throw a ReferenceError
function f6(){
  console.log('f6');
}

// f7();  // Throws a ReferenceError because it appears before the function is defined
let f7 = function() {
  console.log('f7');
};
*/


/*
// if a function does not include a return statement, the function return undefined to the caller
function f8(){
  console.log('test');
}
let test = f8();
console.log(test);  // => undefined
*/

// Object.prototype.returnThis = function() {
//   return this;
// };

// Array.prototype.returnThis = function(val) {
//   return this[val];
// };
// let arrayTest = [1,2,3];
// arrayTest.push(4,5,6);
// console.log(arrayTest.returnThis(5));





// const userInput = {
//   userId: 'colinknebl',
//   wodType: 'couplet'
// };

// class Data {
//   constructor(fName, lName, userId) {
//     this.fName = fName;
//     this.lName = lName;
//     this.userId = userId;
//   }
// }
// Data.prototype.userData = userInput;
// Data.prototype.wod = {
//   x: 1,
//   returnThis: () => {
//     return this;  // this return the window object...??
//   },
//   hello: () => {
//     console.log('hello world');
//   }
// };

// let user1 = new Data('Colin', 'Knebl', 'colinknebl');


/*
// NESTED FUNCTIONS
(function outer(v) {
  console.log('outer:', v);
  inner(v);
  function inner(v) {
    console.log('inner:', v);
  }
}('test'));
*/


/*
// ARROW FUNCTIONS VS REGULAR FUNCTIONS
console.log("Arrow functions don't have their own this or arguments binding. Instead, those identifiers are resolved in the lexical scope like any other variable. That means that inside an arrow function, this and arguments refer to the values of this and arguments in the environment the arrow function is defined in (i.e. \"outside\" the arrow function)");
let calculator = {
  operand1: 1,
  operand2: 2,
  add: function() {
    console.log(this);
    this.result = this.operand1 + this.operand2;
  },
  add2: function() {
    this.add2(this);
  },
  add3: (x) => {
    console.log(x);
    x.result2 = x.operand1 * x.operand2;
  }
};
*/

/*
// THIS VALUE IN JAVASCRIPT 
console.log("Unlike variables, the this keyword does not have a scope, and nested functions to not inherit the this value of the containing function.");
var object1 = {
  method1: function() {
    let self = this;
    console.log(this === object1, this);
    func();

    function func(){
      console.log(this === object1, this);
      console.log(self === object1, self);
    }
  }
};
*/

/*
// OPTIONAL ARGUMENTS IN FUNCTIONS
function getPropertyNames(o, a) { // a is optional
  a = a || [];     // If undefined, use a empty array
  // a ? a : a = [];  // Same as above
  // if (!a) a = [];  // Same as above
  for (let prop in o) a.push(prop);
    return a;
}
let array1 = getPropertyNames({a: 1, b: 2});
console.log('array1:', array1);
getPropertyNames({c:3, d:4}, array1);
console.log('array2:', array1);
*/

/*
// THE ARGUMENTS OBJECT
function argumentsObj(prop1, prop2) {
  console.log('Array.isArray(arguments):',Array.isArray(arguments));
  console.log(arguments);
  console.log('typeof arguments:', typeof arguments);
  let prop3, prop4, prop5;
  if (arguments.length > 2) {
    console.log(`function passed ${arguments.length} argumens. Configuring argument names.`);
    prop3 = arguments[2];
    prop4 = arguments[3];
    prop5 = arguments[4];
  }
  console.log(prop1, prop2, prop3, prop4, prop5);

  // If you change the value of an arguments element, it does NOT change the value of the corresponding property variable. NOTE: in non-strict mode, this does change the corresponding property variable value.
  arguments[0] = 'Spot';
  console.log(prop1, prop2, prop3, prop4, prop5);
  console.log(arguments);

  // If you change the value of a property it changes the value of the corresponding arguments array element
  prop3 = 'Rocky';
  console.log(prop1, prop2, prop3, prop4, prop5);
}
argumentsObj('Chance', 'Shadow', 'Sassy');
*/


/*
// FUNCTIONS AS VALUES
function square(val) {return val*val;}
let s = square;
console.log(square.name, s.name);
let o = {
  square: (val) => {
    return val*val;
  }
};
let a = [function(val){return val*val;}, 4];
console.log(square(4));
console.log(s(4));
console.log(o.square(4));
console.log(a[0](a[1]));
*/


/*
// FUNCTION PROPERTIES
console.log('Functions are primitive values in JS, but a specialized kind of object, which mean that functions can have properties. All functions have a length and name property, but you can define your own function properties as well.\n- length is the number of arguments the function defines\n- name is the name of the function');

uniquerInteger.counter = 0;
function uniquerInteger() {
  return uniquerInteger.counter++;
}

function factorial(n) {
  if (isFinite(n) && n > 0 && n == Math.round(n)) {
    if (!(n in factorial)) factorial[n] = n * factorial(n - 1);
    return factorial[n];
  }
  else return NaN;
}
factorial[0] = 1;
factorial[1] = 2;
factorial[2] = 3;

// cannot iterate through
for (let i = 0; i < factorial.length; i++) {
  console.log(factorial[i]);
}
*/


/*
// CLOSURES
let scope = 'global scope';
function checkScope() {
  let scope = 'local scope';
  function f() {return scope;}
  return f();
}
console.log(checkScope());

let scope1 = 'global scope';
function checkScope1() {
  let scope1 = 'local scope';
  function f() {return scope1;}
  return f;
}
console.log(checkScope1()());

// Closure that allows the counter variable to be accessed by the inner function only
let uniqueInteger1 = (function(){
  let counter = 0;
  return function() { 
    return ++counter; 
  };
}());
uniqueInteger1();
uniqueInteger1();
console.log(uniqueInteger1);

// The variable increment is assigned the return value of a self-invoking function.
// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
// This way increment becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
// This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
// The counter is protected by the scope of the anonymous function, and can only be changed using the increment function.
let increment = (function () {
    let counter = 0;
    return function () {return counter += 1;};
})();

increment();
increment();
console.log(increment());
console.log(increment);   // the variable increment is assigned the function in the return statement above ==> 'function () {return counter += 1;};'
*/



// FUNCTION PROPERTIES, METHODS, AND CONSTRUCTOR

/*
// THE LENGTH PROPERTY
console.log('The length property is read-only and return the number of arguments the function expects.');
function check(a,b,c) {}
console.log(check.length);    // => 3
*/


/*
// THE PROTOTYPE PROPERTY
Function.prototype.hello = () => {console.log('hello world');};
function aaa() {}
console.log(window);
aaa.hello();
*/


/*
// THE call() && apply() METHOD
console.log('The call() and apply() methods allow you to indirectly invoke a function as if it were a method of some other object.\n- One argument minimum, additional arguments optional\n-- 1. The first argument to both call() and apply() is the object on which the function is to be invoked; becomes the value of this\n-- call(): any arguments to call() after the first invocation context argument are the values that are passed to the function that is invoked\n-- apply(): The apply() method is like the call() method, except the arguments to be passed to the function are specified as an array.\n--- apply() works for both array-like object as well as true arrays');

let obj1 = {
  a: 10,
  b: 20,
  add: function() {
    return this.a + this.b;
  }
};
function multiply() {
  return this.a * this.b;
}
let ex = multiply.call(obj1); console.log(ex);
// let ex2 = multiply(); // => TypeError; this is undefined
let ex3 = multiply.apply(obj1); console.log(ex3);

// The below 3 lines are another way of doing the same but omitting the call() and apply() methods
// obj1.m = multiply; console.log(obj1);
// console.log(obj1.m());
// delete obj1.m; console.log(obj1); 

function subtract(val1, val2) {
  console.log(arguments);
  return (this.a * this.b) - (val1 + val2);
}

let ex4 = subtract.call(obj1, 5, 10); console.log(ex4);
let ex5 = subtract.apply(obj1, [5, 10]); console.log(ex5);
*/


/*
// THE bind() METHOD
console.log('- The primary purpose of bind() is to bind a function to an object\n- bind() also performs partial application: any arguments you pass to bind() after the first are bound along with the this value');

function f(y) { return this.x + y; }
let o = {x: 1};
console.log(o);
let g = f.bind(o);
console.log(o, g);
console.log(g(2));    // calling g(x) invokes o.f(x)

let sum = function(x,y,z) {
  console.log(x,y,z,arguments);
  return x + y + z;
};
let succ = sum.bind(null, 1, 5);  // the 2nd and 3rd arguments passed (1 && 5) are bound to the x and y arguments in the sum function
console.log(succ(3));   // since x and y already have a value bound to them, the 3 is assigned to z

let f3 = function(y,z) {
  console.log(this.x,y,z,arguments);
  return this.x + y + z;
};
let g1 = f3.bind({x:1}, 2);
console.log(g1(3));
*/


/*
// THE toString() METHOD
console.log('- The toString() method returns a string that follows the syntax of the function declaration statement.');
function abc() {
  return 1+1;
}
console.log(abc.toString());
*/


/*
// THE FUNCTION CONSTRUCTOR
console.log("The function constructor expects any number of string arguments. The last argument is the text of the function body; it can contain arbitrary JavaScript statements, separated from each other by semicolons.\n- There is no function name passed to the function constructor, and therefore creates anonymous functions.");
let f1 = new Function('x', 'y', 'console.log(x, y);return x*y;');
console.log('f1.name:', f1.name);
console.log(f1.toString());
console.log(f1(4,5));
*/






}());
























