// Advance level js course

// higher order fncs
// constructor fncs
// first class fncs
// new keyword
// iife
// prototype
// prototypal inheritance
// this call apply bind
// pure & impure fncs
// closures

//* Higher order function
// aisa fnc jo accept karle ek aur fnc ya fir wo return karde ek aur fnd it is used in closures
// ex: foreach is higher order func coz it takes another func

var arr = [1, 2, 3, 4, 5];
arr.forEach(function () {});

function abcd(val) {}

abcd(function () {});

//* constructor fncs
// normal function in which this is used and while calling the function you use new keyword
// use case: when u want to make many element of same properties

function moldofBiscuit() {
  this.color = "brown";
  this.width = 22;
  this.height = 22;
}

var bis1 = new moldofBiscuit();
var bis2 = new moldofBiscuit();
var bis3 = new moldofBiscuit();

//* first class fncs
// A Language Is Said To Have First Class Functions When The
// Functions In That Language Are Treated As Normal Values,
// You Can Save Them, You Can Pass Them As Arguments To
// Another Functions.

var fun = function abcd1() {};
setTimeout(function () {});
// setinterval(function () {});

//* New keyword

// New keyword always creates a blank object for the constructor function that is being called just after new

//* iife
// iife => immediately invoked function expression
// iife hai function ko turant chalane ki kala, is tareeke se ki hum log koi private variable bana paaye
var ans = (function () {
  var Iprivateval = 12;
  return {
    getter: function () {
      console.log(privateval);
    },
    setter: function (val) {
      privateval = val;
    },
  };
})();

//* prototype
// [[prototype]] contains many helper properties and methods which we can use to complete our task, let's say we create an array and we want to know length of it, what do we do, we use .length property on array, did we created .length on that array, no! but it still contains .length, the question is how ? the answer is, many properties and methods are already available to use built by javascript creators inside prototype of every object.

//* prototype inhertiance
var human = {
  canFly: false,
  canTalk: true,
  canWalk: true,
  haveEmotions: true,
  hasFourLegs: false,
};
var JsStudent = {
  canMakeAmazingWebsite: true,
  canMakeAwesomeAnimations: true,
  canMakeWorlClassAwwwardedWebsites: true,
};
JsStudent.__proto______ = human;

//* this
// this is a special keyword where its usecase is different in different cases
// jab bhi koi cheej {} brackets ke andar nahi hoti to hum use global scope kahte hai
// ek function jo object ke andar ho, use method kahte hai
// global => window
// function => window
// method => obj
var button = document.querySelector("button");
// button.addEventListener("click", function() {
//   console.log(this);
// });
button.addEventListener("click", function () {
  this.style.backgroundColor = "red";
});

//* call apply bind
// call apply bind => agar tumhaare paas koi function hai and koi object hai and tumhe fnc chalana hai aur by default jo this ki value window hai use window naa rakh kar point karwana hai kisi object ki taraf

// call
function abcd3(val, val2, val3) {
  console.log(this.age);
}
I;
var obj1 = { age: 24 };
abcd3.call(obj, 1, 2, 3);

// apply: passing parameter in array (only value will be passed not array)
function abcd3(val, val2, val3) {
  console.log(this.age);
}
I;
var obj2 = { age: 24 };
abcd3.apply(obj, [1, 2, 3]);

// bind is used in react with eventlistener
function abcd4() {
  console.log(this);
}
var obj3 = { age: 24 };
var bindedfnc = abcd.bind(obj3);
bindedfnc();

//* pure & impure funtion
// Pure function is any function which has these 2 features :
// i) it should always return same output for same input
// ii) it will never change/update the value of a global variable.

// pure function

function abcd8(a, b) {
  return a * b;
}
var ans11 = abcd8(1, 2);
var ans12 = abcd8(1, 2);
I;

// impure function

// i) according to 1st point this fnc is giving diff. ans for same parameter
function abcd6(val) {
  return Math.random() * val;
}
var ans9 = abcd6(2);
var ans10 = abcd6(2);

// ii) it is changing/updating global variable
var abcdef = 12;
function abcd5(a, b) {
  abcdef = 24;
  return a * b;
}
var ans7 = abcd5(1, 2);
var ans8 = abcd5(1, 2);
