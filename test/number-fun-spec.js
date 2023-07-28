const chai = require('chai');
const expect = chai.expect;

const { returnsThree, reciprocal} = require('../problems/number-fun')


describe('test returnsThree function', () => {
    it('should return the number 3', () => {
        expect(returnsThree()).to.equal(3)
    })
})

describe('test reciprocal function', () => {
    context('invalid arguments', ()=>{
        it('should throw an RangeError if argument is outside 1 to 1000000', () => {
            expect(() => reciprocal(-2)).to.throw(RangeError);
            expect(() => reciprocal(1000006)).to.throw(RangeError);
        })
        it('should throw an TypeError if argument is not a number', () => {
            expect(() => reciprocal('hello')).to.throw(TypeError);
            expect(() => reciprocal([1,2,3])).to.throw(TypeError); 
        })
        
    })
    context('valid arguments', () => {
        it('should intake a number and then return the reciprocal of such number', () => {
            expect(reciprocal(4)).to.equal(1/4);
            expect(reciprocal(200)).to.equal(1/200);
            expect(reciprocal(1000)).to.equal(1/1000);
            expect(reciprocal(2)).to.equal(1/2);
        })
    })
})