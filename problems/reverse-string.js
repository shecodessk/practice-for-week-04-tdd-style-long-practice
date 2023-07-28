module.exports = function reverseString(string) {
  if(typeof string !== 'string'){throw new TypeError('argument is not a string');}
  
  let newString = '';
  for(let  i = string.length - 1; i >= 0; i--){
    newString += string[i]
  }
  return newString;
};