var wellClient = (function () {
'use strict';

var a = 1;

var b = ['1'];

b.forEach(function (item) {
  console.log(item);
});

console.log(a);

function sayHello(params) {
  console.log('hello');
}

var index = {
  sayHello: sayHello
};

return index;

}());
