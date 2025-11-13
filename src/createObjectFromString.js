//const str = {};
//const str = null;
//let str;
//const str = 'one.two.three.four.five';
const str = '2..3';


function createObjectFromString(str) {
  //debugger;
  if (str && !(typeof str === 'object')) {
    str = str.toString();
    let arr = str.split('.');
    arr = arr.filter(item => item.length >= 1)
    let resultObj = {};

    arr.reduce((accumulator, item, index, arr) => {
      if (index === arr.length - 1) {
        accumulator[item] = '';
      } else {
        if (item.length) {
          const nestedObject = {};
          accumulator[item] = nestedObject;
          accumulator = nestedObject;
        }
      }
      return accumulator;
    }, resultObj);

    return resultObj;
  }
  else return 'Преобразование не выполнено. Передан некорректный параметр'
}

/* второй вариант покороче получился

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

