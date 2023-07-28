function returnsThree() {
  return 3
}

function reciprocal(n) {
   if (n < 1 || n >1000000) {
    throw new RangeError("Number outside of range");
  }
  if(typeof n !== 'number'){
    throw new TypeError("not a number");
  }
  return 1/n
}

module.exports = {
  returnsThree,
  reciprocal
};