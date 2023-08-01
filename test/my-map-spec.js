const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const myMap  = require('../problems/my-map')
    let cb;
    let array;
    let newArr;
    beforeEach( () =>{
        cb = (el) => {return el * 2};
        array = [1,2,3];
        newArr = myMap(array, cb)
    })

describe('myMap()', () => {

     it('returns new array where cb was called on each original element', () => {
        expect(newArr).to.be.eql([2, 4, 6])
    })
      it('does not mutate original array', () => {
        expect(newArr).to.be.eql([2, 4, 6])
        expect(array).to.be.eql([1, 2, 3])
    })

        it('should not use the Array.map method', () => {
        const spy = chai.spy.on(array, 'map');
        expect(spy).to.have.not.been.called();
    });

    it('should call the passed-in callback function', () => {
        const spy = chai.spy(cb);
        const arr = myMap(array, spy);
        expect(spy).to.have.been.called();
    })

    context('if a empty array is provided', () => {
        it('should return an empty array if a empty array is provided', () => {
            expect(myMap([], cb)).to.eql([]);
        });
    });

    context('if the argument is not an array or the callback is not a function', () => {
        it('should throw a TypeError', () => {
            expect(() => myMap(null, cb)).to.throw(TypeError);
            expect(() => myMap(array, null)).to.throw(TypeError);
        });
    });
   
  
})