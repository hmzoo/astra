const PI=Math.PI;

let results=[];
let steps =30;
let circle=()=>{
    results=[];
    for(let i=0;i<steps;i=i+1){
        let zi= String(i).padStart(5, '0');
        let a=(i/steps)*2*PI;
        let x= Math.cos(a);
        let y=Math.sin(a);
        results.push({zi,a,x,y})
    }
    return results;
}
// a est le rayon du cercle fixe
// b est le rayon du cercle mobile
// d est la distance du point traçant au centre du cercle mobile
let hypot=(b,d)=>{
    let a=1;
    results=[];
    for(let i=0;i<steps;i=i+1){
        let zi= String(i).padStart(5, '0');
        let t=(i/steps)*2*PI;
        const x = (a - b) * Math.cos(t) + d * Math.cos((a - b) / b * t);
        const y = (a - b) * Math.sin(t) - d * Math.sin((a - b) / b * t);
        console.log(x,y,a,b,d);
        results.push({zi,t,x,y})
    }
    return results;
}

let astra ={  }

astra.getCircle=(s)=>{
    steps=s;
    return circle();
}
astra.getHypot=(s,b,d)=>{
    steps=s;
    return hypot(b,d);
}

module.exports= astra ;