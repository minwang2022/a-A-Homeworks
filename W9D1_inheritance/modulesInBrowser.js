// Requiring Files

<body>
  ...

  <script src="zoo/animal.js"></script>
  <script src="zoo/lion.js"></script>
  <script src="app.js"></script>
</body>

// Module Bundlers

// ./zoo/animal.js:

// ./zoo/animal.js
// Define an Animal class; export it as `Animal`. Save it
class Animal {
  eat() {
    // ...
  }
}

module.exports = Animal;

// .zoo/lion.js

const Animal = require('./animal.js');

//Inherit Lion from Animal
class Lion extends Animal {
  roar() {
    // ...
  }
};

module.exports = Lion;

// ./app.js:

const Lion = require('./zoo/lion');
for (let i = 0; i < 10; i++) {
  console.log(new Lion().roar());
}


// Webpack