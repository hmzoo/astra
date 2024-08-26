const fs = require('node:fs');
const astra=require('./astra');



console.log(astra)

let t = astra.getHypot(180,0.25,0.5);

let svg="<svg height='512' width='512' xmlns='http://www.w3.org/2000/svg'>\n";
svg=svg+"<path d='M"+(t[0].x*128+256)+" "+(t[0].y*128+256)+" ";
for(let n=1;n<t.length;n=n+1){
svg=svg+"L"+(t[n].x*128+256)+" "+(t[n].y*128+256)+" "
}
svg=svg+"Z' style='fill:none;stroke:green;stroke-width:3' /></svg>"

console.log(svg);

fs.writeFile('./out.svg', svg, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });


