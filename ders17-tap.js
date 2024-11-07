// Butun meselelerde call, apply ve bind-dan istifade edilmelidir

///############################### 1 #######################################

// Bele bir obyekt verilmisdir

const robotHonda = {
  brand: "Honda",
  model: "Asimo",
};

// Bele bir funksiya var

function speak() {
  console.log("This robot can speak");
}

// speak funksiyasini robotHonda obyekyinde ishlet.

///############################### 2 #######################################

// Bele bir funksiya verilmishdir
function speakLang(language) {
  console.log(`This robot can speak ${language}`);
}

// speakLang funksiyasina muxtelif arqumentler vermekle (English, German, Spanish)
// robotHonda obyektinde ishlet

///############################### 3 #######################################

// 2 obyekt verilib

const robotBoston = {
  brand: "Boston",
  model: "T55",
  jump: function () {
    console.log("This robot can jump");
  },
};

const robotLa = {
  brand: "LA",
  model: "L65",
};

// robotBoston obyektinin jump metodunu robotLa obyektinde ishlet
// 2 usuldan itifade et - hem deyishen vasitesile, hem de birbasha

///############################### 4 #######################################

const person1 = {
  firstName: "Alice",
  lastName: "Smith",
  fullName: function () {
    console.log(`${this.firstName} + " " + ${this.firstName}`);
  },
};

const person2 = {
  firstName: "Bob",
  lastName: "Brown",
};

// person1 obyektinin fullName funksiyasini person2-de ishlet
// 2 usuldan itifade et - hem deyishen vasitesile, hem de birbasha

///############################### 5 #######################################

const person3 = {
  firstName: "Jack",
  lastName: "London",
  fullName: function (city, age) {
    console.log(
      `${this.firstName} + " " + ${this.firstName} lives in ${city} and is ${age} years old`
    );
  },
};

const person4 = {
  firstName: "Mary",
  lastName: "Johnson",
};

// person3 obyektinin fullName funksiyasini person4-de ishlet. Parameter kimi isetenilen sheher adi
// ve yash vere bilersen.
