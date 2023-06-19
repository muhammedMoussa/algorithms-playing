const prompt = require("prompt-sync")({ sigint: true });

let sd = 0;
let a = 0;
let b = 0;
let n = 0;
let ave = 0;
let x = [];

n = parseInt(prompt("Please enter list length: "));

for (let i = 0; i < n; i++) {
  x[i] = parseInt(prompt(`Please enter element number ${i + 1} of list: `));
  ave += x[i];
}

ave = ave / n;

for (let i = 0; i < n; i++) {
  a += Math.pow(x[i] - ave, 2);
}

b = a / n;
sd = Math.sqrt(b);

console.log(sd)
