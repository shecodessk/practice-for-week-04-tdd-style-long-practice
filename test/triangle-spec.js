const {expect} = require('chai');


const { Triangle, Scalene, Isosceles} = require('../problems/triangle');

describe('Triangle Class', () => {
    let triangle =  new Triangle();
    it('exists',() => { expect(triangle).to.exist; })
})
describe('constructor', ()=>{
        let side1;
        let side2;
        let side3;
        let tester;
    beforeEach( ()=>{
        side1 = 5
        side2 = 2
        side3 = 10
        tester = new Triangle(side1, side2, side3)
    })
    it('properties exist', () => {
        expect(tester.length).to.exist;
        expect(tester.width).to.exist;
        expect(tester.height).to.exist;
    })
    it('will intake three sides measurements and set them as properties', () => {
        expect(tester.length).to.equal(side1);
        expect(tester.width).to.equal(side2);
        expect(tester.height).to.equal(side3);
    })
})

describe('methods', ()=>{
    let tester = new Triangle(20, 22, 10)
    let tester2 = new Triangle(4,2,1)
    context('getPerimeter()', () =>{
        it('will return perimeter', ()=>{
            expect(tester.getPerimeter()).to.be.equal(52);
        })
    })
    context('hasValidSideLengths()', () =>{
        it('has valid sides', ()=>{
            expect(tester.hasValidSideLengths()).to.be.true
        })
        it('does not have valid sides', ()=>{
            expect(tester2.hasValidSideLengths()).to.be.false
        })
    })
    context('validate()', ()=>{
        it('has valid sides so it returns true', ()=>{
            expect(tester.validate()).to.be.true
        })
        it('does not have valid sides so it returns false', ()=>{
            expect(tester2.validate()).to.be.false
        })
    })
})

describe('Scalene Class', () => {
    let triangle;
    let scalene;
    let notATriangle;
    let isosceles;

    beforeEach(()=>{
    triangle =  new Scalene(3,4,5);
    scalene = new Scalene(2,3,4)
    notATriangle = new Scalene(4,9,4)
    isosceles = new Isosceles(2,3,2)
    })

    it('inherits from Triangle',() => { 
        expect(triangle).to.be.an.instanceOf(Triangle)
        expect(triangle).to.be.an.instanceOf(Scalene)
    })

    it('has three sides',() => { 
        expect(triangle.length).to.exist;
        expect(triangle.width).to.exist;
        expect(triangle.height).to.exist;
    }) 
    it('has isValidTriangle property',() => { 
        expect(scalene.isValidTriangle).to.exist;
        expect(scalene.isValidTriangle).to.be.true;
        expect(notATriangle.isValidTriangle).to.be.false; 
    }) 
    context('isScalene()', ()=>{
        it('has unequal sides', ()=>{
            expect(scalene.isScalene()).to.be.true;
            expect(notATriangle.isScalene()).to.be.false;
        })
    })
      context('validate()', ()=>{
        it('has valid scalene triangle so it adds a true isValidScalene', ()=>{
            expect(scalene.validate()).to.be.true
        })
        it('does not have valid scalene triangle so it returns a false isValidScalene', ()=>{
            expect(notATriangle.validate()).to.be.false
        })
    })

})
describe('Isosceles Class', () => {
    let triangle;
    let notATriangle;
    let isosceles;

    beforeEach(()=>{
    triangle =  new Isosceles(3,4,5);
    notATriangle = new Isosceles(2,9,4)
    isosceles = new Isosceles(2,3,2)
    })

    it('inherits from Triangle',() => { 
        expect(triangle).to.be.an.instanceOf(Triangle)
        expect(triangle).to.be.an.instanceOf(Isosceles)
    })

    it('has three sides',() => { 
        expect(triangle.length).to.exist;
        expect(triangle.width).to.exist;
        expect(triangle.height).to.exist;
    }) 
    it('has isValidTriangle property',() => { 
        expect(isosceles.isValidTriangle).to.exist;
        expect(isosceles.isValidTriangle).to.be.true;
        expect(notATriangle.isValidTriangle).to.be.false; 
    }) 

context('isIsosceles()', ()=>{
        it('has two equal sides', ()=>{
            expect(isosceles.isIsosceles()).to.be.true;
            expect(notATriangle.isIsosceles()).to.be.false;
        })
    })
      context('validate()', ()=>{
        it('has valid isosceles triangle so it adds a true isValidIsosceles', ()=>{
            expect(isosceles.validate()).to.be.true
        })
        it('does not have two equal sides so it returns a false isValidIsosceles', ()=>{
            expect(notATriangle.validate()).to.be.false
        })
    })
});


