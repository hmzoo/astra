const hypot=require('./hypot.js')


let ccoord = {
    xmin:0.6,
    xmax:1.4,
    ymin:0.6,
    ymax:1.4,
    data:[]
}

ccoord.conv = (t) => {
    console.log(t,t.length);
    ccoord.data = []
    let xr = (ccoord.xmax - ccoord.xmin)/2;
    let yr = (ccoord.ymax - ccoord.ymin)/2;
    let n=0;
    t.forEach((o) => {
        n=n+1;

        let x = ccoord.xmin+xr + o.x * xr;
        let y = ccoord.ymin+yr + o.y * yr;
        console.log(o.x,o.y,xr,yr,x,y)
        ccoord.data.push({n, x, y });
    })

}

ccoord.build=(n,l,ec,s)=>{
    let t= hypot.build(n,l,ec,s);
    
    ccoord.conv(t);
    return ccoord.data;
}

module.exports= ccoord ;