/** Typecasting
 * -----------------
// What is the answer?
//  console.log([] + []);

// Via typecasting, Array will be converted into an empty string + empty string = empty string
*/

/** Template arguments
 * -----------------
function a() {
  return 'hello';
}

const sentence = a`hi`; // using `templates` next to function will be considered as an argument
console.log(sentence);
*/

/**
 * contentEditable
 * -----------------
 * Make entire webpage editable via document.body.contentEditable = true
 */

/** Arguments
 *

 function y() {
   console.log(this.length); // this = arguments, length = length of arguments
  }

  var x = {
    length: 5,
    method: function (y) {
      arguments[0](); // arguments[0] = y
    },
  };

  x.method(y, 1); // 2
  */
