/*
  'user strict' provides stronger error checking and increased security. 
  Main differences:
  1. 'with' statement is not allowed
  2. ALL variables must be declared, a ReferenceError is thrown if a variable is not declared, in non-strict mode un-declared variables implicitly declare a global variable
  3. functions invoked as functions (rather than as methods) have a 'this' value of undefined
*/
"use strict";
// function testStrict() {
//   'use strict';
//   return this;
// }
// function testNonStrict() {
//   return this;
// }



// == VS ===
/* 
  1 == true            // => true; '=='' allows for type conversions
  '1' == true          // => true;
  '1' === true         // => false; '===' compares for strict equality
  1 === 1              // => true;
  1 === '1'            // => false; values are different types
*/





// TERNARY OPERATOR
// let bool; // if you change the value of 'bool' to a truthy value the 'boolean' string will be logged.
// console.log(bool ? 'truthy boolean' : 'falsy boolean');





// CLASSES
// Create an employee class with a constructor function
const Employee = function( 
    empId, 
    firstName,
    lastName,
    department,
    title
  ) {
  // initialize the values 
  this.empId = empId;
  this.firstName = firstName;
  this.lastName = lastName;
  this.department = department;
  this.title = title;
  this.goldStars = 0;
  this.username = null;
};

// Create a prototype function for the Employee class
Employee.prototype.displayInfo = function() {
  console.log('Name: ' + this.firstName, this.lastName, '\ndepartment: ' + this.department, '\nDuty Title: ' + this.title, '\nID: ' + this.empId);
};
Employee.prototype.createUsername = function() {
  this.username = this.firstName + this.lastName;
  console.log(this.username);
};
Employee.prototype.giveGoldStar = function(n) {
  if (!n) return;
  this.goldStars = this.goldStars += n;
};
// The above can also be written as the following.
// Employee.prototype = {
//   constructor: Employee,
//   displayInfo: function() {
//     console.log('Name: ' + this.firstName, this.lastName, '\ndepartment: ' + this.department, '\nDuty Title: ' + this.title, '\nID: ' + this.empId);
//   },
//   createUsername: function() {
//     this.username = this.firstName + this.lastName;
//     console.log(this.username);
//   },
//   giveGoldStar: function(n) {
//     if (!n) return;
//     this.goldStars = this.goldStars += n;
//   }
// };
// Create a new Employee instance
let emp1 = new Employee('001', 'Colin', 'Knebl', 'IT', 'Engineer');
let emp2 = new Employee('002', 'Jessica', 'Knebl', 'Marketing', 'Copy Writer');
// Employee.prototype.displayInfo1 = function() {
//   console.log('Name: ' + this.firstName, this.lastName, '\ndepartment: ' + this.department, '\nDuty Title: ' + this.title, '\nID: ' + this.empId);
// };
// 'title' in emp1              // => true; emp1 has a 'title' key
// emp1 instanceof Employee     // => true; emp1 was created with the Employee constructor







// CLOSE TAB
function closeWindow() {
  var conf = window.confirm('Are you sure you want to close?');
  if (conf) window.close();
}





// SWITCH STATEMENT
function submit() {
  let typeHeader = document.getElementById('type-result');
  let val = document.getElementById('type').value;

  if (!val) typeHeader.innerText = 'Unknown';

  switchStatement: switch (val) { // labeled statement
    case 'Number':
      typeHeader.innerText = 'Number';
      break;
    case 'Text':
      typeHeader.innerText = 'Text';
      break;
    case 'Boolean':
      typeHeader.innerText = 'Boolean';
      break;
    case 'Object':
      typeHeader.innerText = 'Object';
      break;
    case 'Null':
      typeHeader.innerText = 'Null';
      break;
    case 'Undefined':
      typeHeader.innerText = 'Undefined';
      break;
    default:
      typeHeader.innerText = 'Unknown';
      break;
  }
}
function clearSubmission() {
  let typeHeader = document.getElementById('type-result');
  typeHeader.innerText = '';
  document.getElementById('type').value = '';
}





// LOOPS
// WHILE LOOP
function goWhileLoop() {
  let count = 1;
  while (count <= 10) {
    console.log(count);
    count++;
  }
}
// DO WHILE LOOP
function doWhileLoop() {
  let count = 1;
  do {
    console.log(count);
  } while (++count <= 10); // if the condition is written 'count++', the incrementer is increased after the condition is evaluated. a.k.a.--the loop counts to 11.
}
// FOR LOOP
function demonstrateForLoop() {
  var i,j;
  console.log('for (i = 0, j = 10; i < j; i++, j--)');
  for (i = 0, j = 10; i < j; i++, j--) {
    console.log('i: ' + i, '& j: ' + j);
  }
}





// LOOPING THROUGH A OBJECT
const car = {
  make: 'Honda',
  model: 'Civic',
  year: 2013
};
function demonstrateForInLoop() {
  let array = [], i = 0;
  console.log('starting values: ', array, i);
  // FOR/IN LOOP OVER OBJECT
  for (array[i++] in car) {
    console.log(array, i);
  }
  for (i in array) console.log(i);
}

let person = {
  fname: 'colin',
  lname: 'knebl',
  arms: 2
};
let mixedArray = [3, 5, 7, 9];
mixedArray.foo = 'bar';         // adds a string index to the array. NOTE: strings will always be indexed after numbers in an array.

function demo1() {
  console.log('x === object keys, person[x] === object values');
  // FOR/IN LOOP OVER ARRAY
  for (let x in person) {
    console.log('x:' + x, '& person[' + x + '] = ' + person[x]);
  }
}
function demo2() {
  console.log('x === array index, person[x] === index values');
  // FOR/IN LOOP OVER ARRAY
  for (let x in mixedArray) {
    console.log('x:' + x, '& mixedArray[' + x + '] = ' + mixedArray[x]);
  }
}
function demo3() {
  console.log('x === array index value');
  // FOR OF LOOP OVER ARRAY
  for (let x of mixedArray) {
    console.log('x:' + x);
  }
}







// BREAK AND CONTINUE
// NOTE: break and continue have a different effect on while loops than for loops
// let myArray = [1,2,3,null,5];
// // breaks out of the loop if any array index is falsy
// for (let i = 0; i < myArray.length; i++) {
//   if (!myArray[i]) {
//     console.log('oops!');
//     break;
//   }
//   console.log(myArray[i]);
// }
// // skips to next iteration of the loop if any array index is falsy
// for (let i = 0; i < myArray.length; i++) {
//   if (!myArray[i]) {
//     console.log('oops!');
//     continue;
//   }
//   console.log(myArray[i]);
// }





// ERRORS AND EXCEPTION HANDLING
function throwString() {
  throw 'I am a string!';
}
function throwError() {
  throw new Error('I am an error, this is my message!');
}
function throwHandledError() {
  try {
    console.log('starting try...');

    undeclaredFunction();

    console.log('ending try...');
  }
  catch(err) {
    console.log('An error has occured...');
    console.log(err);
    console.log('that was the error.');
  }
  finally {
    console.log('finally, this always gets executed');
  }
}





// DEBUGGER
function anotherDebugger() {
  console.log('second debugger');
  debugger;
  return;
}
function useDebugger() {
  console.log('here goes the debugger! NOTE: the debugger ');
  debugger;
  anotherDebugger();
  throw 'just ran the debugger';
}





// OBJECTS
const o0 = function(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};
o0.prototype.customMethod = function() {
  return 'I am an inherited method!';
};
o0.prototype.addProps = function() {
  return this.x + this.y + this.z;
};
o0.prototype.multiplyProps = function() {
  return this.x * this.y * this.z;
};
let obj = new o0(1, 2, 3);
let objectCopy = o0;
// console.log(objectCopy); // objectCopy also is assigned the property of 'foo' = 'bar'. This also works in the reverse; if a new property is assigned to objectCopy, originalObject receives the same property.


// CREATING OBJECTS
let obj01_1 = new Object(); // objects created with the new keyword use the prototype of the object that created them
let obj01_2 = Object.create(Object.prototype);  // first argument is the prototype of the new object -- compare to 'obj02_2'
let obj01_3 = {};  // objects created as object literals use Object.prototype as their prototype
let obj01_4 = new Object(obj);  // in essence, this links/copies 'obj01_4' to 'obj'. if you change the value of any of the properties to 'objo1_4' the value of the same property in 'obj' changes as well (and vice versa).
let obj01_5 = Object.create(obj);  // in essence, this links/copies 'obj01_4' to 'obj'. if you change the value of any of the properties to 'objo1_4' the value of the same property in 'obj' changes as well (and vice versa).


// create an object with a an 'x' attribute
let obj02_1 = new Object({x: 1});
let obj02_2 = Object.create(Object.prototype, {
  x: {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
let obj02_3 = {x: 1};

// create objects with no prototype attribute
let obj03_1 = new Object(); obj03_1.__proto__ = null;
let obj03_2 = Object.create(null);
let obj03_3 = {}; obj03_3.__proto__ = null;


// DELETING OBJECT PROPERTIES
let obj04_1 = {foo: 'bar', x: 1};
delete obj04_1.foo;   // deletes the foo attribute in 'obj04_1'. Cannot delete inherited properties, only own properties


// TESTING FOR PROPERTIES IN OBJECTS
let obj05_1 = Object.create(Object.prototype, {
  foo: {
    value: 'bar',
    enumerable: false
  },
  x: {
    value: 1,
    enumerable: true,
    configurable: true
  }
});
// let testDeletedProps = (function(){
//   console.log('obj05_1:', obj05_1);
//   console.log("'foo' in obj05_1:", 'foo' in obj05_1);    // tests to see if 'foo' is in the 'obj05_1' object
//   console.log('delete obj05_1.x'); delete obj05_1.x; 
//   console.log("'x' in obj05_1:", 'x' in obj05_1);    // the property attribute MUST be 'configurable: true' in order to delete
// }());

// let hasOwnProp = (function(){
//   // 'hasOwnProperty' return false for inherited properties and true for own properties
//   console.log(
//     "obj05_1.hasOwnProperty('foo'):", obj05_1.hasOwnProperty('foo'), 
//     "\nobj05_1.hasOwnProperty('toString'):", obj05_1.hasOwnProperty('toString')
//   );
// }());


// ENUMERATING OBJECTS
let obj06_1 = Object.create(Object.prototype, {
  a: {
    value: 1,
    enumerable: true
  },
  b: {
    value: 2,
    enumerable: false
  },
  c: {
    value: 3,
    enumerable: true
  }
});
// let isEnumerable = (function(){
//   // log object
//   console.log('obj06_1:', obj06_1);

//   // the own properties of 'obj06_1' are enumerable and can be iterated through
//   console.log("obj06_1.propertyIsEnumerable('a')", obj06_1.propertyIsEnumerable('a'));

//   // the native properties/methods which are inherited are NOT enumerable
//   console.log("obj06_1.propertyIsEnumerable('toString'):", obj06_1.propertyIsEnumerable('toString'));

//   // the inherited properties/methods that are not native ARE enumerable
//   console.log('emp1:', emp1);
//   console.log("emp1.__proto__.propertyIsEnumerable('displayInfo'):", emp1.__proto__.propertyIsEnumerable('displayInfo'));

//   // use a for/in loop to iterate through the properties of the object that are enumerable. 
//   // NOTE: the name of the property is assigned to the loop variable
//   for (let propName in obj06_1) console.log(propName);   // => a, c; b is not logged because it is not enumerable

//   // Properties in the prototype that are inherited and non-native will be enumerated. In order to guard against enumerating inherited properties that are non-native, use an 'if' statement such as the one below
//   for (let propName in emp1) {
//     if (!emp1.hasOwnProperty(propName)) continue;
//     console.log(propName, emp1[propName]);
//   }
// }());


// Object GETTERs && SETTERs
class Animal {
  constructor(type) {
    this.type = type;
  }
}
class DogClass extends Animal {
  constructor(type, name, breed, color, yearBorn) {
    super(type); // must be called before this is called in subclass constructor
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.yearBorn = yearBorn;
  }

  // personality property
  get personality() {
    if (this.age >= 4) {
      return 'Calm';
    }
    else {
      return 'Rowdy';
    }
  }

  // Get Current Age
  get age() {
    return this.getAge();
  }
  getAge() {
    let dt = new Date();
    let currentYear = dt.getFullYear();
    return currentYear - this.yearBorn;
  }

  // methods
  seeDog() {
    return this.aggregateDogInfo();
  }
  aggregateDogInfo() {
    return `${this.name} is a ${this.color} ${this.breed} that is ${this.age} years old.`;
  }
}
const animal1 = new DogClass('Dog', 'Tora', 'German Shepherd', 'Black and Brown', 2014);


// OBJECT PROPERTY ATTRIBUTES
// const propAttr = (function(){
//   console.log("The four attributes of a data property are value, writable, enumerable, and configurable.\nTo set the property attributes when creating the object, use the Object.create() method.\nWith the Object.create() method, the first argument is the prototype object that will be inherited, and the second argument is the property attributes.");

//   let animalObject = Object.create(DogClass.prototype, {
//     type:     { value: 'Dog',             writable: false, enumerable: true, configurable: false },
//     name:     { value: 'Balto',           writable: false, enumerable: true, configurable: false },
//     breed:    { value: 'Husky',           writable: false, enumerable: true, configurable: false },
//     color:    { value: 'Black and White', writable: false, enumerable: true, configurable: false },
//     yearBorn: { value: 2000,              writable: false, enumerable: true, configurable: false }
//   });

//   console.log("Object.getOwnPropertyDescriptor(animalObject, 'type'):", Object.getOwnPropertyDescriptor(animalObject, 'type'));

//   // Cannot get property descriptor for native properties
//   console.log("Object.getOwnPropertyDescriptor({}, 'toString')", Object.getOwnPropertyDescriptor({}, 'toString'));

//   let obj_1 = new Object();
//   Object.defineProperty(obj_1, 'foo', {
//     value: 'bar'
//   });
//   console.log("obj_1.hasOwnProperty('foo'):", obj_1.hasOwnProperty('foo'));

//   let obj_2 = Object.defineProperties({}, {
//     x: {value: 1, writable: true, enumerable: true, configurable: true},
//     y: {value: 2, writable: true, enumerable: true, configurable: true},
//     z: { 
//       get: function(){ return this.x + this.y;},
//       set: function(val){this.x = val;},
//       enumerable: true,
//       configurable: true
//     }
//   });
//   console.log("obj_2:", obj_2);
// }());


// OBJECT EXTENSIBLE ATTRIBUTE
const animal2 = new DogClass('Dog', 'Dez', 'Black Lab', 'Black', 2014);
// let extFun = (function(){
//   console.log('The extensible attribute of an object specifies whether new properties can be added to the object or not.');

//   // check to see if animal2 is extensible
//   console.log("Object.isExtensible(animal2):", Object.isExtensible(animal2));
//   console.log("run Object.preventExtensions(animal2)"); Object.preventExtensions(animal2);
//   console.log("Object.isExtensible(animal2):", Object.isExtensible(animal2), '// not animal2 cannot be extended');
//   // animal2.type = 'cat'; delete animal2.type;  // these are run successfully
//   // animal2.type = 'Dog';  // TypeError because animal2 is not extensible
// }());

const animal3 = new DogClass('Dog', 'Chance', 'American Bulldogs', 'White, Black, and Brown', 2016);
// let extFunSeal = (function(){
//   // Object.seal
//   console.log("\nObject.seal works like Object.preventExtensions(), but in addition to making the object nonextensible, it also makes all of the own properties of that object non-configurable.");
//   // check to see if animal3 is sealed
//   console.log("Object.isSealed(animal3):", Object.isSealed(animal3));
//   console.log("Object.getOwnPropertyDescriptor(animal3, 'type')", Object.getOwnPropertyDescriptor(animal3, 'type'));
//   console.log("run Object.seal(animal3)"); Object.seal(animal3);
//   console.log("Object.isSealed(animal3):", Object.isSealed(animal3));
//   console.log("Object.getOwnPropertyDescriptor(animal3, 'type')", Object.getOwnPropertyDescriptor(animal3, 'type'));
//   // animal3.type = 'Cat';  // this is run successfully
//   // delete animal3.type;  // TypeError because a sealed object's properties are non-configurable
// }());

const animal4 = new DogClass('Dog', 'Shadow', 'Golden Retriever', 'Golden', 2010);
// let extFunFreeze = (function(){
//   // Object.freeze
//   console.log("\nObject.freeze() locks objects down even tighter than Object.seal(). In addition to making the object non-extensible and its properties non-configurable, it also makes all of the object\'s own data properties read-only.");
//   console.log("Object.isFrozen(animal4)", Object.isFrozen(animal4));
//   console.log("Object.getOwnPropertyDescriptor(animal4, 'type')", Object.getOwnPropertyDescriptor(animal4, 'type'));
//   console.log("run Object.freeze(animal4)"); Object.freeze(animal4);
//   console.log("Object.isFrozen(animal4)", Object.isFrozen(animal4));
//   console.log("Object.getOwnPropertyDescriptor(animal4, 'type')", Object.getOwnPropertyDescriptor(animal4, 'type'));
//   // animal4.type = 'Cat';   // TypeError because property is read only
//   // delete animal4.type;   // TypeError because a froze object's properties are non-configurable
// }());


// SERIALIZING OBJECTS
// let serialize = (function(){
//   let obj1 = {
//     x: 1,
//     y: {
//       z: [false, null, "", NaN, Infinity, -Infinity]
//     }
//   };
//   console.log('obj1:', obj1);
//   let obj2 = JSON.stringify(obj1);
//   console.log('obj2:', obj2);
//   let obj3 = JSON.parse(obj2);
//   console.log('obj3:', obj3);

//   let date1 = new Date();
//   console.log('date1:', date1);
//   let date2 = JSON.stringify(date1);
//   console.log('date2:', date2);
//   let date3 = JSON.parse(date2);
//   console.log('date3:', date3);
// }());


// OBJECT METHODS
// THE toString() METHOD
// console.log({x: 1}.toString());





const cart = {
  "14SCREEN": {
    "Name": "Large Hand Tossed Pizza",
    "Qty": 1,
    "Toppings": ["Pepperoni"],
    "Price": 10,
  },
  "P12IPAZA": {
    "Name": "Medium Pan Pizza",
    "Qty": 1,
    "Toppings": ["Onion", "Spinach"],
    "Price": 9,
  },
  "B16PBIT": {
    "Name": "Parmesan Bread Bites",
    "Qty": 1,
    "Toppings": [],
    "Price": 2.99,
  }
};

function formatCartForDisplay(cart) {

  // Initialize a new array
  let order = new Array();

  // Loop through each item in the cart
  for (let item in cart) {
    
    // If the item has toppings, add the name along with the toppings to the order array
    if (cart[item].Toppings.length > 0) {

      order.push(`${cart[item].Name} (${cart[item].Toppings.join(' ')})`);
    }
    // If the item does not have toppings, add the name along with (No Toppings) to the order array
    else {

      order.push(`${cart[item].Name} (No Toppings)`);
    }
  }
  // Return the order array
  return order;
}
formatCartForDisplay(cart);

/*
function testFunc(a) {
  return function(b) {
    return a + b;
  };
}
let testA = testFunc(1)(2);
let testB = testFunc(1);
*/









function stringifySearch(window){

  /*
    This function takes the search string and turns it into an object.
  */

  let console = window.console;

  // console.log(window.location.search);

  const searchObj = new Object();
  let search = window.location.search;
  let key = new Array();
  let val = new Array();
  let item = 'key';

  for (let i = 0; i < search.length; i++) {

    if (search[i] === '?') {
      continue;
    }
    else if (search[i] === '=') {
      item = 'val';

      // turn the upcoming value's key into a string and add it to the searchObj
      key = key.join('');
      searchObj[key] = undefined;
    }
    else if (search[i] === '&') {
      item = 'key';

      // turn the previous value into the previous key's string
      val = val.join('');
      searchObj[key] = val;
      key = [];
      val = [];
    }
    else if (search[i] !== '=' && search[i] !== '&') {

      if (item === 'key') {
        key.push(search[i]);
      }
      else if (item === 'val') {
        val.push(search[i]);
      }
    }

    if (i === search.length - 1) {

      if (val.length > 0) {
        val = val.join('');
        searchObj[key] = val;
        key = [];
        val = [];
      }
    }
  }
  return searchObj;
}

if (window.location.search) {
  let returnedObj = stringifySearch(window);
  console.log(window.location.search, returnedObj);
}


