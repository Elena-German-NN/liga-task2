
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

  function returnValue() {
    const result = f.apply(this, arrArguments);
    arrArguments = [];
    return result;
  }

  curryF.valueOf = () => returnValue();
  curryF.toString = () => returnValue();

  return curryF;

};


let curryAddition = curry(addition);
//let currySubtraction = curry(subtraction);
//let curryMultiplication = curry(multiplication);

console.log(+curryAddition(40)(50)(20));
//console.log(currySubtraction(30)(60)(70));
//console.log(curryMultiplication(3)(2)(10));

let a = curryAddition(40)(50)(20)
console.log(a)
let b = a(20)
console.log(b)

