"use strict";
// let linkedTestElement = document.getElementById("linked-test").innerHTML;
// linkedTestElement = document.getElementById(
//   "linked-test"
// ).innerHTML = `${linkedTestElement}--JS: linked--`;
// console.log(linkedTestElement);
// **un-comment out the section above**

// | **********    if/else    ***********

const noRepeat = "a string";
let repeatVar = null;
let checkProperty = false;
if ((checkProperty = false)) {
  repeatVar = "property one";
  console.log(`${noRepeat} + condition ONE met`);
} else if ((checkProperty = false)) {
  repeatVar = "property two";
  console.log(`${noRepeat} + condition TWO met`);
} else if ((checkProperty = true)) {
  repeatVar = "property three";
  console.log(`${noRepeat} + condition THREE met`);
} else if ((checkProperty = false)) {
  repeatVar = "property four";
  console.log(`${noRepeat} + condition FOUR met`);
} else {
  console.log("default condition");
}
