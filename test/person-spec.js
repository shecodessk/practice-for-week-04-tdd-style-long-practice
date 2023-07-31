 const chai = require('chai')
 const expect = chai.expect;

 const Person = require('../problems/person');

 describe('constructor', ()=>{
    let person;
    beforeEach( ()=>{
        person = new Person('Brandon', 21);
        
    })
    context('When present', () =>{
        it('Intakes name as properties on instance', () =>{
            expect(person.name).to.equal('Brandon');
        })
        it('Intakes  age as properties on instance', () =>{
            expect(person.age).to.equal(21);
        })
    }) 
 })

 describe('instance methods', ()=>{
    let person;
    let person2;
    let person3;
    let array;
    beforeEach(()=>{
        person = new Person('Mai', 54, person2);
        person2 = new Person('Maria', 10);
        person3 = new Person('Jose', 30, person);
        array = [person, person2, person3];
    })

    describe('sayHello()', ()=>{
        it('will return a string with the person name and greeting message', ()=>{
            expect(person2.sayHello()).to.equal(`Hi ${person2.name}, it's nice to meet you`)
            expect(person3.sayHello('anna')).to.equal("Hi anna, it's nice to meet you")
        })
    })
    describe('visit(otherPerson)', ()=>{
        it('will return a string stating this instance visited the passed-in person instance', ()=>{
            expect(person.visit(person2)).to.equal(`${person.name} visited ${person2.name}`)
            expect(person3.visit(person)).to.equal(`${person3.name} visited ${person.name}`)
        })
    })

     describe('switchVisit(otherPerson)', ()=>{
        it("will invoke the visit function of the parameter (`otherPerson`), passing in the current instance as the argument", ()=>{
            expect(person.switchVisit(person3)).to.equal(`${person.name} visited ${person3.name}`)            
        })
    })
    describe('update(obj)', ()=>{
        context('if the argument is a valid object', ()=>{
            it("should update properties with the object's values", ()=>{
                person2.update({name: 'Rose', age: 33});
                
                expect(person2.name).to.equal("Rose");
                expect(person2.age).to.equal(33);
            
            })
        });
        context('if the argument is not a valid object',()=>{
            it('will throw a TypeError if argument is not an object',()=>{
                expect(()=>{person2.update(null)}).to.throw(TypeError,'not an object' );
            })
            it('will throw a TypeError if name or age argument are missing',()=>{
                expect(()=>{person2.update({})}).to.throw(TypeError,'a name or an age property');
            })
       })

    })

    describe('tryUpdate(obj)', ()=>{
        context('update() successfully invoked', ()=>{
            it('will return true', ()=>{
                expect(person2.tryUpdate({name: 'Aly', age: 44})).to.be.true
            })
        })
        context('update() unsuccessfully invoked',()=>{
            it('will return false', ()=>{
                expect(person2.tryUpdate(null)).to.be.false
                expect(person2.tryUpdate({})).to.be.false
            })
        })
    })
        
    describe('greetAll(obj)', ()=>{
        it('should return an array of sayHello() strings from each instance', ()=>{
           const strings = Person.greetAll(array);
            for (let i = 0; i < strings; i++) {
                expect(strings[i]).to.equal(array[i].sayHello());
            }
        })
    })
    
 })