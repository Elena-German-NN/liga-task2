const str = 'one.two.three.four.five';

function createObjectFromString(str) {
  const arr = str.split('.');
  let resultObj = {};
  //debugger;

  arr.reduce((accumulator, item, index, arr) => {
    if (index === arr.length - 1) {
      accumulator[item] = '';
    } else {
      const nestedObject = {};
      accumulator[item] = nestedObject;
      accumulator = nestedObject;
    }
    return accumulator;
  }, resultObj);

  return resultObj;
}

/* второй вариант покороче

function createObjectFromString(str) {
    const arr = str.split('.');
    //   debugger;

    let resultObj = arr.reduceRight((accumulator, item) => {
        const parentObject = {};
        parentObject[item] = accumulator;
        return parentObject;
    }, '');

   return resultObj;
}

*/

console.log(createObjectFromString(str));

