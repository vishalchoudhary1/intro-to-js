const dulha = "lab";
const dulhan = "laby";

//* hoisting
console.log(a);
var a = 10;

//* objects

var job = {
  name: "alex",
  gender: "male",
  age: 20,
  employed: false,
};

//* diff. btw var let const
// var old js mein tha
// var function scoped hota hai => var apne parent fnc mein kahi bhi use ho sakta hai
// var adds itself to windows objects

// let, const new es6 mein h
// let braces scoped hota h => let tumhe loop k bhar i ko use nhi krde dega
// let doesn't adds itself to window objects
function abcd() {
  for (var i = 1; i < 12; i++) {
    console.log(i);
  }
  console.log(i);
}
abcd();

// execution context is a container where the function's code is executed and it's created whenever a function is called, it contains 3 things, variables, functions and lexical environment.

// lexical environment hota hai ek chart jisme ye likha hota hai ke aapka particular function ki cheejo ko access kar sakta hai and kinko nahi, matlab ki it holds it's scope and scope chain

// abcd1 can access a, def but not variable of def(b) this is called lexical env
function abcd1() {
  var a = 1;
  function def() {
    var b = 2;
  }
}

//* forEach
var arr = [1, 2, 4, 5, 6, 7, 8, 10];

arr.forEach(function (val) {
  console.log(val + 2);
});

//* forIn

var obj = {
  name: "koi",
  age: 30,
  city: "tokyo",
};
for (var key in obj) {
  console.log(key, obj[key]);
}

//* first class function: // js mein ek concept hai jiska matlab hota hai ki aap fnc. ko use kar sakte ho as a value
function abcd2(a) {
  a();
}
abcd2(function () {
  console.log("hey");
});

var kk = {
    name: "ko",
    age: 10
}

delete kk.age;
console.log(kk.age);