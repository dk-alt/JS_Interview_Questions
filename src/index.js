import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Deepak!</h1>`;

//infinite currying
const sum = (a) => (b) => {
  if (b) return sum(a + b);
  else return a;
};
console.log(sum(5)(6)(7)()); //output: 18

//flatten Array

const arr1 = [[1], [2], [3, 4], [5, [6, 7, [8, 9]]]];

const flattenArray = (arr, result = []) => {
  arr.forEach((ar) => {
    if (!Array.isArray(ar)) result.push(ar);
    else flattenArray(ar, result);
  });
  return result;
};

console.log(flattenArray(arr1));

//count unique
const fruits = ["mango", "banana", "apple", "mango"];

const resultUnique = {};

fruits.forEach((fruit) => {
  resultUnique[fruit] = (resultUnique[fruit] && resultUnique[fruit] + 1) || 1;
});
console.log(resultUnique);

//debouncing

const myDebouncing = (cb, delay) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
};

const fn = myDebouncing(() => console.log("myDebouncing"), 2000);
fn();
fn();
fn();

//variable hoeisting
var temp = 6;
function outer() {
  var temp = 5;
  function inner() {
    // temp++;
    console.log("temp", temp);
    var temp = 4;
  }

  inner();
}

outer(); //Nan

///perfect pair
const stringBracket = "[{}{{{}}}()]";
const newArray = [...stringBracket.split("")];
const stack = [];
stringBracket.split("").forEach((x) => {
  newArray.pop();

  if (x === "{" || x === "(" || x === "[") {
    stack.push(x);
  }
  if (x === "}" || x === ")" || x === "]") {
    stack.pop();
  }
});
console.log(stack);
console.log("r", newArray);

if (!stack.length && !newArray.length) {
  console.log("correct bracket");
} else {
  console.log("not correct bracket");
}
//https://jsfiddle.net/Deepakdkalt/hfv9kwgo/25/

{
  const arr = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5, 6, 7];

  const uniqueArr = arr.filter((number, index, originalArr) => {
    return originalArr.indexOf(number) === index;
  });

  console.log([...new Set(arr)]);
}

const multiply = (a) => {
  return (b) => {
    return a * b;
  };
};

const multiplyBy2 = multiply(2);

console.log(multiplyBy2(3));

console.log(multiply(2)(3));

function outer1() {
  var name = "dk";
  function inner1() {
    console.log("name", name);
  }
  inner1();
}
console.log(outer1());
