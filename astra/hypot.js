const buildsvg=require('./buildsvg.js')
const PI=Math.PI;

let steps=360

let hypot={
    n:1,
    l:1,
    c:0.8,
    steps:180,
    data:[],
    svg:""
};

hypot.set=(ns,nb,nc)=>{
hypot.steps=ns;
hypot.b=nb;
hypot.c=nc;
};


hypot.build=(n,l,ec,s)=>{
    hypot.n=n;
    hypot.l=l;
    hypot.c=ec;
    hypot.steps=s;
    let a=1;
    let b=a/(n/l);
    let c=ec;
    let steps=s;
    let max=a-b+c;
    results=[];
    for(let i=0;i<steps;i=i+1){
        let t=(i/steps)*2*PI*l;
        const x = ((a - b) * Math.cos(t) + c * Math.cos((a - b) / b * t))/max;
        const y = ((a - b) * Math.sin(t) - c * Math.sin((a - b) / b * t))/max;
       // console.log(x,y,a,b,c);
        results.push({t,x,y})
    }
    hypot.data=results;
    return results;
}
hypot.svg=()=>{
    let info="N: "+hypot.n+" L: "+hypot.l+" C: "+hypot.c+" steps: "+hypot.steps;
    return buildsvg(hypot.data,info);
}

hypot.json=()=>{
    return JSON.stringify(hypot, null, 2);
}

module.exports= hypot ;