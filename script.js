"use strict";
let linkedTestElement = document.getElementById("linked-test").innerHTML;
linkedTestElement = document.getElementById(
  "linked-test"
).innerHTML = `${linkedTestElement}--JS: linked--`;
console.log(linkedTestElement);
