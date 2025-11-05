
function addition(...args) {
  return args.reduce((accumulator, arg) => {
    return accumulator + arg;
  }, 0);
}

function subtraction(...args) {
  return args.reduce((accumulator, arg) => {
    return accumulator - arg;
  }, 0);
}

function multiplication(...args) {
  return args.reduce((accumulator, arg) => {
    return accumulator * arg;
  }, 1);
}


function curry(f) {
  //debugger;
  let arrArguments = [];

  function curryF(a) {
    arrArguments.push(a);    
    return curryF;
  }

  function returnValue(){
    const result = f.apply(this, arrArguments);
     arrArguments = [];
     return result;
  }

  curryF.toString = () => returnValue(); 

  return curryF;

};


let curryAddition = curry(addition);
let currySubtraction = curry(subtraction);
let curryMultiplication = curry(multiplication);

console.log(+curryAddition(40)(50)(20));   //добавлен +, чтобы вызывался toString у функции
console.log(+currySubtraction(30)(60)(70));
console.log(+curryMultiplication(3)(2)(10));

