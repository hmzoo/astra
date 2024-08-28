
const { writeFile } = require('fs');
const ccoord = require('./astra/ccoord.js');


let n=3;
let l=1;
let c=1.5;
let s=120;

let r=ccoord.build(n,l,c,s);

writeFile("./params.json", JSON.stringify(r, null, 2), (error) => {
    if (error) {
      console.log('An error has occurred ', error);
      return;
    }
    console.log('Data written successfully to disk');
  });
console.log(r);
