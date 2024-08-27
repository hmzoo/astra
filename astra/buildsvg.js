
let buildsvg = (t,info) => {
    let W = 512
    let R = 1.1;
    let PX = W / 2;
    let SX = W / (R * 2);
    let svg = "<svg height='512' width='512' xmlns='http://www.w3.org/2000/svg'>\n";
    svg = svg +"<text x='40' y='20' fill='dodgerblue' font-family='Arial, sans-serif' >"+info+"</text>";
    svg = svg + "<rect x='" + ((W - (W / R)) / 2) + "' y='" + ((W - (W / R)) / 2) + "' width='" + (W / R) + "' height='" + (W / R) + "' stroke='dodgerblue' fill='transparent' stroke-width='1'/>"
    svg = svg + "<path d='M" + (t[0].x * SX + PX) + " " + (t[0].y * SX + PX) + " ";
    let plots = "<circle cx='" + (t[0].x * SX + PX) + "' cy='" + (t[0].y * SX + PX) + "' r='4' style='fill:pink;stroke:none'/>\n"
    for (let n = 1; n < t.length; n = n + 1) {
        svg = svg + "L" + (t[n].x * SX + PX) + " " + (t[n].y * SX + PX) + " "
        if (n + 1 != t.length) {
            plots = plots + "<circle cx='" + (t[n].x * SX + PX) + "' cy='" + (t[n].y * SX + PX) + "' r='2' style='fill:cyan;stroke:none'/>\n"
        } else {
            plots = plots + "<circle cx='" + (t[n].x * SX + PX) + "' cy='" + (t[n].y * SX + PX) + "' r='4' style='fill:red;stroke:none'/>\n"
        }
    }
    svg = svg + "Z' style='fill:none;stroke:green;stroke-width:2' />" + plots + "</svg>";

    return svg;
}

module.exports= buildsvg ;