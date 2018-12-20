//Refactor each function according to the directions given. The tests will still pass if you use Es5 syntax, but the spirit of this exercise is to use Es6 syntax and then compare the two functions to one another. Your refactored code should go in the functions with "your code goes here".

// refactor this to use the es6 destructuring syntax (hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
//x and y are index numbers, this function swaps the values at those indexes
function swap(arr,x,y){
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

swapEs6 = (arr,x,y) => [arr[x], arr[y]] = [arr[y], arr[x]];



//refactor this to use es6 for...of syntax
function changeEachElem(array){
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}

changeEachElemEs6 = (array) => {
  var result = [];
  for(let value of array){
    result.push(value);
  }
  return result;
}



//refactor this to use es6 arrow function
function useArrows(array){
  var result = array.map(function(element){
    return element * 2;
  });

  return result;
}

useArrowsEs6 = array => array.map(element => element * 2);


//refactor this to use the backticks for string interpolation
function printString(name,greeting){
  return name + ' says "' + greeting +'"';
}

printStringEs6 = (name,greeting) => `${name} says "${greeting}"`;


//refactor this to  be more concise by using new es6 syntax for 'computed property names'
function makeObj(val1,val2){
  var num = val1 + val2;
  var myObj = {};
  myObj[num] = 'Shayna';
  return myObj;
}

makeObjEs6 = (val1,val2) => ({[val1 + val2]: 'Shayna'});



//refactor this to be more concise by using new es6 syntax (hint https://ariya.io/2013/02/es6-and-object-literal-property-value-shorthand)
function ObjProperties(name, grade, favColor) {
  return {
    name: name,
    grade: grade,
    favColor: favColor
  };
}

ObjPropertiesEs6 = (name, grade, favColor) => ({name, grade, favColor});



/* DON’T TOUCH */

module.exports = {---
  swap,
  swapEs6,
  changeEachElem,
  changeEachElemEs6,
  useArrows,
  useArrowsEs6,
  printString,
  printStringEs6,
  makeObj,
  makeObjEs6,
  ObjProperties,
  ObjPropertiesEs6
};
