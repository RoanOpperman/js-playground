"use strict";
// let linkedTestElement = document.getElementById("linked-test").innerHTML;
// linkedTestElement = document.getElementById(
//   "linked-test"
// ).innerHTML = `${linkedTestElement}--JS: linked--`;
// console.log(linkedTestElement);
// **un-comment out the section above**

// | **********    switch  ***********

const noRepeat = "a string";
let checkProperty = true;

switch (checkProperty) {
  case false:
    console.log(`${noRepeat} + condition ONE met`);
    break;
  case false:
    console.log(`${noRepeat} + condition TWO met`);
    break;
  case false:
    console.log(`${noRepeat} + condition THREE met`);
    break;
  case true:
    console.log(`${noRepeat} + condition FOUR met`);
    break;
  default:
    console.log("default condition");
    break;
}
