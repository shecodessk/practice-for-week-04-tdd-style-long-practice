function myMap(inputArray, callback) {
  const newArray = [];
    for(let i = 0; i < inputArray.length; i++){
      let el = inputArray[i];
      newArray.push(callback(el))
    }
    return newArray;
}


/*const arr = [1, 2, 3];
const callback = (el) => el * 2;

console.log(myMap(arr, callback)); // prints [2,4,6]
console.log(arr); // prints [1,2,3]
*/
module.exports = myMap;