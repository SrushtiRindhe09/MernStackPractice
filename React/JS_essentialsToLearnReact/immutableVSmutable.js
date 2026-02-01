var arr = [2,5,6,7,8];
var arr2 = arr; //copied arr in arr2

arr2.pop(); //remove last element from arr
console.log(arr);
console.log(arr2);

/* in react, ypu find a thing called "state", you cannot mutate it
maeans you cannot directly remove or add its value


EX-*/

var state = [3,15,8,9];
state.pop();  // its not allowed in react

// now question is that  how to update state in immutable way
// immutable(cannot change array or object directly )

// 1. update array in immuable way

var state = [12, 56, 89, 56];
var copy = [...state]; // spread opeartor

copy.pop();

// 2. update object in immutable way

var state = {name : "srushti",
             age : 20
};

var copy = {...state};

copy.name = "Sruu"; // updated state values
copy.age = 19;
state = copy; // state object is replaced with copy
console.log(state);
console.log(copy);
// now value is updated

