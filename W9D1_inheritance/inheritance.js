// Object.create
// Dog.prototype = Object.create(Animal.prototype);

function Animal (name) {
    this.name = name;
  };
  
  Animal.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
  };
  
  function Dog (name, coatColor) {
    // call super-constructor function on **the current `Dog` instance**.
    Animal.call(this, name);
  
    // `Dog`-specific initialization
    this.coatColor = coatColor;
  }
  
  Dog.prototype = Object.create(Animal.prototype); // Dog now inherits from Animal
  
  Dog.prototype.constructor = Dog // otherwise instances of Dog will have 'instance.constructor === Animal'
  
  Dog.prototype.bark = function () {
    console.log("Bark!");
  };
  
  const liesel = new Dog("Liesel");
  
  liesel.bark();
  liesel.sayHello();

//   The (old) Surrogate trick

function Animal (name) {
    this.name = name;
  };
  
  Animal.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
  };
  
  function Dog (name, coatColor) {
    Animal.call(this, name);
  
    this.coatColor = coatColor;
  }
  
  // A surrogate will be used to construct `Dog.prototype`.
  // A `Surrogate` instance should delegate to `Animal.prototype`.
  function Surrogate () {};
  Surrogate.prototype = Animal.prototype;
  
  // Set `Dog.prototype` to a `Surrogate` instance.
  Dog.prototype = new Surrogate();
  
  // Make sure that instances of Dog have instance.constructor === Dog (rather than Animal)
  Dog.prototype.constructor = Dog; 
  
  const liesel = new Dog("Liesel", "Black");
  
  liesel.sayHello();