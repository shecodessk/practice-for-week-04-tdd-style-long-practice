class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
    
  }

  sayHello(string){
    if(string){
      this.name = string;
    }
    return `Hi ${this.name}, it's nice to meet you`
  }

  visit(otherPerson){
    if(otherPerson instanceof Person){
      return `${this.name} visited ${otherPerson.name}`
  }
  }

  switchVisit(otherPerson){
    return this.visit(otherPerson)
  }

   update(obj){

    if(!obj instanceof Object|| obj === null){
      throw new TypeError('not an object')
    }else if (!obj.name && !obj.age) {
      throw new TypeError("The object must contain at least a name or an age property");
    }
   
    this.name = obj.name;
    this.age = obj.age;

  }

   tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch {
      return false;
    }
  }

  static greetAll(array) {
    return array.map((person) => person.sayHello());
  }
}



module.exports = Person;