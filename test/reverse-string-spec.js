const chai = require('chai');
const expect = chai.expect;
const reverseString = require('../problems/reverse-string')


describe('reverseString()', function(){
    let str;
    let num;

    this.beforeEach( ()=>{
        str = 'fun'
        num = 5;
    })
    it('should reverse input string', function(){
        expect(reverseString(str)).to.equal('nuf');
        //expect(reverseString('happy')).to.equal('yppah');
        
    })

    it('should throw error when input is not a string', function(){
        expect(() => reverseString(num)).to.throw(TypeError)
    })
})