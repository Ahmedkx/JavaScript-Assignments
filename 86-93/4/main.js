let ele1 = document.querySelector(".one");
let ele2 = document.querySelector(".two");

let ele1title = ele1.title;
let ele2title = ele2.title;
let ele1text = ele1.textContent;
let ele2text = ele2.textContent;

ele1.title = ele2title;
ele2.title = ele1title;
ele1.textContent = ele2text;
ele2.textContent = ele1text + " " + ele2.attributes.length;

console.log(ele1);
console.log(ele2);
