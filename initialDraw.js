var circles = new Array();

function initialCircles(){
 var freqByteData = new Uint8Array(sample.analyser.frequencyBinCount);
    for (var i = 1; i < circles.length; i++) {
        circles[i].radius = freqByteData[i] * 2;
        circles[i].y = circles[i].y > sample.canvas.height ? 0 : circles[i].y + 1;
        circles[i].draw();
    }
}
initialCircles();

function Circle() {
    this.x = Math.random() * sample.canvas.width;
    this.y = Math.random() * sample.canvas.height;
    this.radius = Math.random()*100 + 50;
    this.color = 'rgb(' + getRandomColor() + ',' + getRandomColor() + ',' + getRandomColor() + ')';    
}

Circle.prototype.draw = function() {
    var that = this;
    sample.drawContext.save();
    sample.drawContext.beginPath();
    sample.drawContext.globalAlpha = Math.random() / 3 + 0.2;
    sample.drawContext.arc(that.x, that.y, that.radius/5, 0, Math.PI * 2);
    sample.drawContext.fillStyle = this.color;
    sample.drawContext.fill();
    sample.drawContext.restore();
}

for (var i = 0; i < 20; i++) {
    circles[i] = new Circle();
    circles[i].draw();
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(elementDiv) {
  elementDiv.classList.toggle("show");

}


