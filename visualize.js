
// Draw Waves
OscillatorSample.prototype.drawWaves = function() {
    
    var bufferLength = this.analyser.frequencyBinCount; 
    var dataArray = new Uint8Array(bufferLength);
    this.analyser.getByteTimeDomainData(dataArray);
    this.drawContext.fillStyle = 'black';
    this.drawContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawContext.lineWidth = 2;
   
    this.drawContext.beginPath();

    var sliceWidth = this.canvas.width * 1.0 / bufferLength;
    var x = 0;

    for (var i = 0; i < bufferLength; i++) {

	var v = dataArray[i] /512;
	var y =  v * this.canvas.height+30;

	if (i === 0) {
	    this.drawContext.moveTo(x, y);
	} else {
	    this.drawContext.lineTo(x, y);
	}

	x += sliceWidth;
    }

    this.drawContext.lineTo(this.canvas.width, this.canvas.height / 2);
    this.drawContext.stroke();

    requestAnimFrame(this.drawWaves.bind(this));
}



OscillatorSample.prototype.drawCircles = function(){
    requestAnimFrame(this.drawCircles.bind(this)); 
   
    var freqByteData = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(freqByteData);
    this.drawContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (var i = 1; i <freqByteData.length; i += 10){
        this.drawContext.fillStyle = 'rgb(' + getRandomColor() + ',' + getRandomColor() + ',' + getRandomColor() + ')';
	
	if (this.display=='circles'){
	    this.drawContext.lineWidth=1;
	    this.drawContext.beginPath();
	    this.drawContext.arc(this.canvas.width/2,this.canvas.height/2,freqByteData[i]/4,0,2*Math.PI);
	    this.drawContext.stroke();
	}

	else if(this.display=='discs'){
	    this.drawContext.beginPath();
	    this.drawContext.arc(this.canvas.width/2,this.canvas.height/2,freqByteData[i]/2,0,2*Math.PI);
	    this.drawContext.fill();
	}
    }
}

function getRandomColor(){
    return Math.random() * 255 >> 0;
}




OscillatorSample.prototype.drawLines = function() {

    requestAnimFrame(this.drawLines.bind(this));
    this.changeColor();
    fbc_array = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(fbc_array);
    this.drawContext.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear the this.canvas
    bars = 200;
    for (var i = 0; i < bars; i++) {
	bar_x = i * 4;
	bar_width = 3;
	bar_height = -(fbc_array[i]/3);
	this.drawContext.fillRect(bar_x, this.canvas.height, bar_width, bar_height);
	this.drawContext.fillRect(bar_x, this.canvas.height, bar_width, bar_height);

    }
}



