(function(){
  "use strict";

  // CREATING ARRAYS
  const a1_0 = [];
  const a1_1 = new Array();
  const a1_2 = new Array(10);  // calling new Array() with a single numeric argument assigns the length of the array.
  // console.log(a1_2.length);   // 10
  const a1_3 = new Array(5, 4, 3, 2, 1, 'testing', true, NaN);  // calling a new array with a single non-numeric argument or with multiple numeric arguments creates a new array with each argument as an element in the array

  const a2_1 = [1, 2, 3, , 5];

  const base = 2;
  const a2_2 = [base, base*2, base*4, base*6];

  const a2_3 = [
    [{x: 1}, {y: 2}],
    [{a: true}, {b: false}]
  ];
  // console.log("a2_3[0][1].y:", a2_3[0][1].y);  // 2


  // ARRAY LENGTH
  const arrayLength = function(){
    const a3_1 = [1, 2, 3, 4, 5];
    console.log(a3_1);
    console.log('a3_1.length = 3'); a3_1.length = 3;
    console.log(a3_1);
    console.log('a3_1.length = 0'); a3_1.length = 0;
    console.log(a3_1);
    console.log('a3_1.length = 5'); a3_1.length = 5;
    console.log(a3_1);

    // to make the length property of an array read only
    const a3_2 = [1, 2, 3, 4, 5];
    Object.defineProperty(a3_2, 'length', {writable: false});
    console.log(a3_2);
    // console.log('a3_2.length = 3'); 
    // a3_2.length = 3;  // TypeError: the length property has been set to read only

    let a3_3 = [6, 7, 8, 9, 10];
    console.log('Object.isFrozen(a3_3):', Object.isFrozen(a3_3));
    console.log('run Object.freeze(a3_3)'); Object.freeze(a3_3);
    console.log('Object.isFrozen(a3_3):', Object.isFrozen(a3_3));
    // a3_3[0] = false;  // TypeError, cannot assign a value to a read only property
    console.log(a3_3);
  };
  // arrayLength();


  // ADDING AND DELETING ARRAY ELEMENTS
  const addDelArray = function(){
    console.log('*** ADDING ***');
    let a4_1 = new Array();
    a4_1 = ['one', 'two', 'three'];
    a4_1[3] = 'four';
    a4_1.push('five');  // add to the end of the array
    a4_1.push('six', 'seven');
    a4_1.unshift('zero');   // add to the beginning of the array, shifts existing elements to a higher index - does not delete any elements
    a4_1.unshift('-two', '-one');
    a4_1[-1] = '-three';
    console.log(a4_1);
    console.log(a4_1[a4_1.length - 1]);
    console.log("a4_1['4']:", a4_1['4']);
    console.log('a4_1[-1]:', a4_1[-1]);

    console.log('*** DELETING ***');
    console.log("Use the 'delete' operator when deleting elements from an array. NOTE: deleting elements does not affect the array's length.");
    console.log('a4_1.length:', a4_1.length);
    console.log('delete a4_1[4]'); delete a4_1[4];
    console.log('a4_1.length:', a4_1.length);
    console.log('a4_1[4]:', a4_1[4]);
    console.log('a4_1 is now a sparse array.');
  };
  // addDelArray();


  // ITERATING THROUGH ARRAYS
  const iterateArray = function(){
    let a5_1 = ['one', 'two', 'three', 'four', 'five'];
    for (let i = 0, len = a5_1.length; i < len; i++) {
      console.log(`${i}: ${a5_1[i]}`);
    }

    console.log('The above example assumes the array is dense. If the array is sparse (contains null, undefined, or non-existent elements), just add an if statement to the for loop.');
    
    let a5_2 = ['one', 'two', , 'four', 'five'];
    console.log('a5_2:', a5_2);
    for (let i = 0, len = a5_2.length; i < len; i++) {
      if (a5_2[i] === null || a5_2[i] === undefined) continue;
      console.log(`${i}: ${a5_2[i]}`); 
    }

    console.log('You can also use a for/in loop with sparse arrays');
    for (let index in a5_2) {
      let value = a5_2[index];
      console.log(`${index}: ${value}`);
    }

    console.log("You can also use '.forEach()' to iterate through an array.");
    a5_1.forEach(val => console.log(val));
    let i = 0;
    a5_1.forEach(val => {
      console.log(`${i}: ${val}`);
      i++;
    });
    a5_1.forEach(function(val) {
      // do something
    });
  };
  // iterateArray();


  // MULTIDIMENSIONAL ARRAYS
  let multiDimArrays = () => {
    console.log('JavaScript does not support true multidimensional arrays, but you can approximate them. Here is an example of a multiplication table: 13 columns x 13 rows (works up to 12 * 12)');

    // create the columns
    let table = new Array(13);

    // create the rows
    for (let i = 0, len = table.length; i < len; i++) {
      table[i] = new Array(13);
    }

    for (let column = 0, len = table.length; column < len; column++) {

      for (let row = 0, len2 = table[column].length; row < len2; row++) {
        // console.log(`table[${column}][${row}] = ${column} * ${row} =`, column * row);
        table[column][row] = column * row;
      }
    }
    console.log('table[2][8]:', table[2][8]);
    console.log('table[5][12]:', table[5][12]);
    console.log('table[6][6]:', table[6][6]);
    console.log('table[12][12]:', table[12][12]);
  };
  // multiDimArrays();


  // ARRAY METHODS
  // Array.prototype.join()
  const join = function(){
    const a6_1 = [1, 2, 3];
    let a6_2 = a6_1.join();
    console.log(a6_2);

    const a6_3 = ['hello', 'world'];
    let a6_4 = a6_3.join(' ');
    console.log(a6_4);

    let a6_5 = a6_4.split(' ');
    console.log(a6_5);
  };
  // join();

  // Array.prototype.reverse()
  const reverse = function(){
    const a7_1 = [1, 2, 3];
    console.log(a7_1);
    a7_1.reverse();
    console.log(a7_1);
    let a7_2 = a7_1.reverse().join(', ');
    console.log(a7_2);
  };
  // reverse();

  // Array.prototype.sort()
  const sort = function (){
    const a8_1 = ['a', 'x', 'Bob', 'Bill', 1, false, NaN, null, undefined, 0];
    a8_1.sort();
    console.log(a8_1);

    const a8_2 = ['banana', 'cherry', 'apple'];
    a8_2.sort();
    console.log(a8_2);

    console.log(['x', 'z', 'y'].sort());

    console.info('To sort into some order other than alphabetical, you must pass a comparison function as an argument to sort().\n- If the first argument should appear before the second, the comparison function should return a number less than zero.\n- If the first argument should appear after the second in the sorted array, the function should return a number greater than zero.\n- And if the two values are equivalent (i.e. if their order is irrelevant), the comparison function should return 0.');

    const a8_3 = [33, 4, 1111, 222];
    const a8_4 = [33, 4, 1111, 222];
    a8_3.sort();
    console.log('a8_3:', a8_3);

    a8_4.sort((a,b) => {
      console.log(a, b);
      return a + b;
    });
    console.log('a8_4:', a8_4);

    const a8_5 = [33, 4, 1111, 222, 33];
    a8_5.sort((a,b) => {
      // let x = a - b;console.log(`${a} - ${b} =`, a - b); // numerical order, => [4, 33, 33, 222, 1111]
      let x = b - a;console.log(`${b} - ${a} =`, b - a); // reverse numerical order, => [1111, 222, 33, 33, 4]
      console.log('x =', x);

      if (x > 0) {
        console.log(`${a} is greater than ${b}, ${a} should appear after ${b}`);
      }
      else if (x < 0) {
        console.log(`${a} is less than ${b}, ${a} should appear before ${b}`); 
      }
      else {
        console.log(`${a} is equal to ${b}, their sort order is irrelevant`);
      }
      return x;
    });
    console.log('a8_5:', a8_5);

    console.log('Sorting is case sensitive.');
    const a8_6 = ['ant', 'Dog', 'cat', 'Bug'];
    a8_6.sort();
    console.log(a8_6);

    const a8_7 = ['ant', 'Dog', 'cat', 'cap', 'Bug'];
    a8_7.sort((a,b) => {
      let t = a.toLowerCase();
      let s = b.toLowerCase();
      console.log(s, t);
      if (s < t) {
        console.log(`${s} < ${t}`);
        return 1;
      }
      if (s > t) {
        console.log(`${s} > ${t}`);
        return -1;
      }
      return 0;
    });
    console.log(a8_7);
  };
  // sort();

  // Array.prototype.concat()
  const concatArray = function() {
    console.info('Array.prototype.concat() adds the arguments of concat() to the array on which it is invoked. concat() returns a new array, it does not modify the original array in which it was invoked.');
    let a9_1 = [1, 2, 3];
    console.log('a9_1:', a9_1);
    a9_1.concat('test');
    console.log('a9_1:', a9_1);

    let a9_2 = a9_1.concat(4, 5);
    console.log('a9_2:', a9_2);

    let a9_3 = a9_1.concat([4,5], [6,7]);
    console.log('a9_3:', a9_3);

    let a9_4 = a9_1.concat(4,[5,6]);
    console.log('a9_4:', a9_4);

    let a9_5 = a9_1.concat(4,[5,[6,7]]);
    console.log('a9_5:', a9_5);
  };
  // concatArray();

  // Array.prototype.slice()
  const sliceArray = function() {
    console.info('Array.prototype.slice() returns a slice, or subarray, of the specified array. slice() accepts two arguments, the start and end of the array to be returned. slice() returns a new array, it does not modify the original array in which it was invoked.');

    let a10_1 = [1,2,3,4,5];
    console.log('a10_1:', a10_1);
    a10_1.slice(2, 4);
    console.log('a10_1:', a10_1);

    let a10_2 = a10_1.slice(1, 4);
    console.log('a10_1.slice(1, 4):', a10_2);

    let a10_3 = a10_1.slice(4);
    console.log('a10_1.slice(4):', a10_3);

    let a10_4 = a10_1.slice(0, -2);
    console.log('a10_1.slice(0, -2):', a10_4);

    let a10_5 = a10_1.slice(-3, -2);
    console.log('a10_1.slice(-3, -2):', a10_5);
  };
  // sliceArray();

  // Array.prototype.splice()
  const spliceArray = function() {
    console.info('Array.prototype.splice() is a general-purpose method for inserting or removing elements from an array.\n- splice() can delete elements from an array, insert new elements into an array, or perform both operations at the same time.\n- splice() returns the modified original array.');

    let a11_1 = [1,2,3,4,5,6,7,8];
    console.log('a11_1:', a11_1);
    let a11_2 = a11_1.splice(2, 4); console.log('a11_1.splice(2, 4);');
    console.log('a11_1:', a11_1);
    console.log('a11_2:', a11_2);

    console.log('\n');

    let a11_3 = [1,2,3,4,5,6,7,8];
    console.log('a11_3:', a11_3);
    let a11_4 = a11_3.splice(2, 4, 'a', 'b', 'c', true); console.log("a11_3.splice(2, 4, 'a', 'b', 'c', true);");
    console.log('a11_3:', a11_3);
    console.log('a11_4:', a11_4);

    console.log('\n');

    a11_4.unshift(1, 2); a11_4.push(7, 8); console.log('rebuilding a11_4...');
    console.log('a11_4:', a11_4);
    let a11_5 = a11_4.splice(2); console.log('a11_4.splice(2);');
    console.log('a11_4:', a11_4);
    console.log('a11_5:', a11_5);

    let a11_6 = a11_5.splice(1, 0);  // removes 0 elements
    console.log('a11_5:', a11_5);
    console.log('a11_6:', a11_6);

    let a11_7 = a11_5.splice(1, 0, 'a', 'b', 'c');  // removes 0 elements and adds 'a', 'b', and 'c'
    console.log('a11_5:', a11_5);
    console.log('a11_7:', a11_7);
  };
  // spliceArray();

  // Array.prototype.push()
  const pushArray = function(){
    console.info("Array.prototype.push() appends one or more new elements to the end of an array and returns the new length of the array.");

    let a12_1 = [1,2,3,4,5,6,7,8];
    console.log('a12_1:', a12_1);
    let a12_2 = a12_1.push(9,10,11); console.log('a12_1.push(9,10,11);');
    console.log('a12_1:', a12_1);
    console.log('a12_2:', a12_2);

    a12_1.push(12,[13,14,15]); console.log('a12_1.push(12,[13,14,15]);');
    console.log('a12_1:', a12_1);
  };
  // pushArray();

  // Array.prototype.pop()
  const popArray = function(){
    console.info("Array.prototype.pop() deletes the last element of an array, decrements the array length, and returns the value that it removed.");

    let a13_1 = [1,2,3,4,5,6,7,8];
    console.log('a13_1:', a13_1);
    let a13_2 = a13_1.pop();
    console.log('a13_1:', a13_1);
    console.log('a13_2:', a13_2);

    a13_1.push(['a', 'b', 'c']); console.log("a13_1.push(['a', 'b', 'c']);");
    console.log('a13_1:', a13_1);
    let a13_3 = a13_1.pop();
    console.log('a13_1:', a13_1);
    console.log('a13_3:', a13_3);
  };
  // popArray();

  // Array.prototype.unshift()
  const unshiftArray = function(){
    console.info("Array.prototype.unshift() adds an element or elements to the beginning of the array, shifts the existing array elements up to higher indexes to make room, and returns the new length of the array.");

    let a14_1 = [2,3,4,5,6,7,8];
    console.log('a14_1:', a14_1);
    let a14_2 = a14_1.unshift(0,1);
    console.log('a14_1:', a14_1);
    console.log('a14_2:', a14_2);
  };
  // unshiftArray();

  // Array.prototype.shift()
  const shiftArray = function(){
    console.info("Array.prototype.shift() removes and returns the first element of the array, shifting all subsequent elements down one place to occupy the newly vacant space at the start of the array.");

    let a15_1 = [1,2,3,4,5];
    console.log('a15_1:', a15_1);
    let a15_2 = a15_1.shift(); console.log('a15_1.shift();');
    console.log('a15_1:', a15_1);
    console.log('a15_2:', a15_2);

    let a15_3 = a15_1.shift(); console.log('a15_1.shift();');
    console.log('a15_1:', a15_1);
    console.log('a15_3:', a15_3);
  };
  // shiftArray();

  // Array.prototype.toString()
  const toStringArray = function(){
    console.info("Array.prototype.toString() outputs a comma separated list of each element as a string.");

    const a16_1 = ['apple', 'banana', 'cantaloupe'];
    console.log('a16_1:', a16_1);
    let a16_2 = a16_1.toString();
    console.log('a16_1:', a16_1);
    console.log('a16_2:', a16_2);
    console.log('a16_1.join(", ") =>', a16_1.join(', '));

    const a16_3 = [1,2,3];
    let a16_4 = a16_3.toString();
    console.log('a16_3:', a16_3);
    console.log('a16_4:', a16_4);
  };
  // toStringArray();


  // ECMAScript 5 ARRAY METHODS
  // Array.prototype.forEach()
  const arrayForEach = function(){
    console.info("Array.prototype.forEach() iterates through an array, invoking a function you specify for each element.\nforEach() accepts up to three arguments:\n1. The value of the array element\n2. The index of the array element\n3. The array itself");

    const array = [1,2,3,4,5];
    array.forEach((val, i, arr) => {
      arr[i] = ++val;  // this would be more efficiently complete with map()
    });
    console.log('array:', array);
  };
  // arrayForEach();

  // Array.prototype.map()
  const arrayMap = function(){
    console.info("Array.prototype.map() method passes each element of the array on which it is invoked to the function you specify, and returns an array containing the values returned by that function. map() return a new array, it does not modify the original array.");

    const array = [1,2,3,4,5];
    console.log('array:', array);

    let array2 = array.map((val, i, arr) => {
      return val * val;
    });
    console.log('array:', array);
    console.log('array2:', array2);
  };
  // arrayMap();

  // Array.prototype.filter()
  const arrayfilter = function(){
    console.info("Array.prototype.filter() method return an array containing a subset of the elements of the array on which it is invoked.\n- The function passed to filter() should be a predicate: a function that return either true or false\n- If the return value is true, or a value that converts to true, then the element passed to the predicate is a member of the subset and is added to the array that will become the return value");

    const array = ['good', 'happy','bad element','lovely', 'hottttt'];
    let array2 = array.filter((val, i, arr) => {
      return val !== 'bad element';
    });
    console.log('array:', array);
    console.log('array2:', array2);
  };
  // arrayfilter();

  // Array.prototype.every()
  const arrayEvery = function(){
    console.info("- Array.prototype.every() is a predicate function (must return true of false).\n- returns true if and only if your predicate function returns true for all elements in the array.\n- does not modify the original array");

    const array = [1,2,3,4,5,11];
    let bool = array.every((val, i, arr) => {
      return val < 10;
    });
    console.log('array:', array);
    console.log('bool:', bool);
  };
  // arrayEvery();

  // Array.prototype.some()
  const arraySome = function(){
    console.info("- Array.prototype.some() is a predicate function (must return true of false).\n- returns true if there exists at least one element in the array for which the predicate returns true, and returns false if and only if the predicate return false for all elements of the array.\n- does not modify the original array");

    const array = [1,2,3,4,5,11];
    let bool = array.some((val, i, arr) => {
      return val < 0;
    });
    console.log('array:', array);
    console.log('bool:', bool);
  };
  // arraySome();

  // Array.prototype.reduce() && Array.prototype.reduceRight()
  const reduceArray = function(){
    console.info("- Array.prototype.reduce() method combines the elements of an array, using the function you specify to produce a single value.\n- Takes 2 arguments\n-- 1. the function that performs the reduction operation; the function takes 4 arguments\n--- 1. The accumulated result of the reduction so far\n--- 2. The value of the corresponding index of the array\n--- 3. The index value\n--- 4. The array itself\n-- 2. an initial value to pass to the function\n- Array.prototype.reduceRight() is the same as the reduce() method, except it processes the array from highest index to lowest (right to left)");

    const array = [1,2,3,4,5];

    console.log('\n');

    console.log('*** reduce() ***');
    let sum = array.reduce((init, val, i, arr) => {
      console.log('initial value =', init, '; element value =', val, '; index =', i, '; array =', arr);
      return init + val;
    }, 10);
    console.log('array:', array);
    console.log('sum:', sum, '    // NOTE: initial value was 10');

    console.log('\n');

    console.log('*** reduceRight() ***');
    let sum2 = array.reduceRight((init, val, i, arr) => {
      console.log('initial value =', init, '; element value =', val, '; index =', i, '; array =', arr);
      return init + val;
    }, 10);
    console.log('array:', array);
    console.log('sum2:', sum2, '    // NOTE: initial value was 10');
  };
  // reduceArray();

  // Array.prototype.indexOf() && Array.prototype.lastIndexOf()
  const arrayIndexMethods = function(){
    console.info("Array.prototype.indexOf() && Array.prototype.lastIndexOf() search an array for an element with a specified value, and return the index of the first such element found, or -1 if none is found.\n- indexOf() searches from beginning to end\n- lastIndexOf() searches from the end to the beginning\n- Takes 2 arguments:\n-- 1. The value to search for\n-- 2. (Optional) The array index at which to begin the search\n- returns '-1' if no elements match the search parameter");

    const array = [1,2,3,4,5];
    let searchFor = '3';
    let index = array.indexOf(searchFor);
    console.log(array);
    console.log(`indexOf ${searchFor} =`, index, `(typeof ${searchFor} =`, typeof searchFor + ')');

    const array2 = ['dog', 'cat', 'bird', 'pig', 'bird'];
    let searchFor2 = 'bird';
    let index2 = array2.lastIndexOf(searchFor2);
    console.log(array2);
    console.log(`lastIndexOf ${searchFor2} =`, index2);

    const array3 = ['dog', 'cat', 'bird', 'pig', 'bird'];
    let searchFor3 = 'bird';
    let startAt = 3;
    let index3 = array3.lastIndexOf(searchFor3, startAt);
    console.log(array3);
    console.log(`lastIndexOf ${searchFor3} =`, index3, '; start search at index position:', startAt);
  };
  // arrayIndexMethods();


  // ARRAY TYPE
  const arrayType = function() {

    const array = [1,2,3];

    console.log(Array.isArray(array));
    console.log(typeof array);
    console.log([] instanceof Array);

  };
  // arrayType();
}());


















