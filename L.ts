// L: Liskov Substitution Principle
// The ability for a sub class to behave like the super class

class Bird {
    walk(){
        return "i'm walking"
    }
}

class FlyingBird extends Bird{
    fly(){
        return "i'm flying"
    }
}

class Dove extends FlyingBird{}

class Penguin extends Bird{}

const penguin = new Penguin
console.log(penguin.walk());
