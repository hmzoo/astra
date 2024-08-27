const hypot=require('./hypot.js')


let ccoord = {
    xmin:0.8,
    xmax:1.2,
    ymin:0.8,
    ymax:1.2,
    data:[]
}

ccoord.conv = (t) => {
    console.log(t,t.length);
    ccoord.data = []
    let xr = (ccoord.xmax - ccoord.xmin)/2;
    let yr = (ccoord.ymax - ccoord.ymin)/2;
    t.forEach((o) => {
      

        let x = ccoord.xmin+xr + o.x * xr;
        let y = ccoord.ymin+yr + o.y * yr;
        console.log(o.x,o.y,xr,yr,x,y)
        ccoord.data.push({ x, y });
    })

}

ccoord.build=(n,l,ec,s)=>{
    let t= hypot.build(n,l,ec,s);
    
    ccoord.conv(t);
    return ccoord.data;
}

module.exports= ccoord ;