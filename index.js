const fs = require('node:fs');
const astra=require('./astra');
const hypot=require('./astra/hypot.js')








let t = hypot.build(3,2,0.4,60)
svg=hypot.svg();

console.log(svg);
console.log(hypot.json());

fs.writeFile('./out.svg', svg, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });


