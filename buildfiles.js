const fs = require('node:fs');
const sharp = require('sharp');
const hypot = require('./astra/hypot.js')

const out_dir = "./out/";
const img_dir = "./img/";

let mkdir = (d) => {
    if (!fs.existsSync(d)) {
        fs.mkdirSync(d);
    }
}

let formats = [{ n: 3, l: 1 }, { n: 3, l: 2 }, { n: 4, l: 1 }, { n: 4, l: 2 }, , { n: 4, l: 3 }]

mkdir(out_dir);
mkdir(img_dir);

let n = 3;
let l = 3;
let c = 0.7
let s = 360

let make_files = (num) => {

    let dir = out_dir + "/S" + s + "N" + n + "L" + l + "/";
    mkdir(dir);
    mkdir(dir + "/svg");
    mkdir(dir + "/json");
    mkdir(dir + "/png");

    let filename = "S" + s + "N" + n + "L" + l + "C" + c.toFixed(2);



    let t = hypot.build(n, l, c, s)
    let svg = hypot.svg();
    let json = hypot.json()

    fs.writeFile(dir + "/svg/" + filename + '.svg', svg, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("SVG " + filename + ".svg saved")
        }
    });

    fs.writeFile(dir + "/json/" + filename + '.json', json, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("JSON " + filename + ".json saved")
        }
    });
    sharp(Buffer.from(svg))
        .png()
        .toFile(dir + "/png/" + filename + ".png")
      
        .then(info => {
            console.log('Conversion réussie :', info);
            fs.copyFile(dir + "/png/" + filename + ".png", img_dir+"img_"+num.toString().padStart(5, '0')+".png", (err) => {
                if (err) {
                    console.log("Error Found:", err);
                }
                else {

                }
            });
        })
        .catch(err => {
            console.error('Erreur lors de la conversion :', err);
        });
}

inum=1;
for (i = 2; i < 25; i = i + 1) {
    for (j = 1; j < i; j = j + 1) {
        console.log(i, j)
        if (i % j != 0 && j!=1) {
            n = i;
            l = j;

            for (let k = 5; k < 205; k = k + 5) {
                c = k / 100;
                
                make_files(inum);
                inum=inum+1;
            }
        }

    }
}



