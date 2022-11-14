var stop, staticx;
var img = new Image();
img.src = "";
function Sakura( x, y, s, r, fn) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.fn = fn;
}
Sakura.prototype.draw = function(cxt) {
    cxt.save();
    var cxt = (40 * this.s) / 4;
    cxt.translate(this.x,this.y);
    cxt.rotate(this.r);
    cxt.drawImage(img, 0, 0, 40*this.s, 40*this.s);
    cxt.restore();
};
function startSakura(){
    resquestAnimationFrame = 
    window.resquestAnimationFrame || 
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame;
    var canvas = document.createElement("canvas"), cxt;
    staticx = true;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.setAttribute(
        "style",
        "position: Fixed;left: 0;top: 0;pointer-events: none;"
);
canvas.setAttribute("id","canvas_sakura");
document.getElementsByTagName("body")[0].appendChild(canvas);
cxt = canvas.getContext("2d");
var sakuraList = new sakuraList();
for (var i = 0; i < 300; i++){
    var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
    randomX = getRandom("x");
    randomY = getRandom("y");
    randomS = getRandom("s");
    randomR = getRandom("r");
    randomFnx = getRandom("fnx");
    randomFny = getRandom("fny");
    randomFnR = getRandom("fnr");
    sakura = new Sakura(randomX, randomY, randomS, randomR, {
        x: randomFnx,
        y: randomFny,
        r: randomFnR,
    });
    sakura.draw(cxt);
    sakuraList.push(sakura);
}