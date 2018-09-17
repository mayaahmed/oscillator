// Start off by initializing a new context.
audioContext = new (window.AudioContext || window.webkitAudioContext)();

if (!audioContext.createGain)
    audioContext.createGain = audioContext.createGainNode;


// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
	window.webkitRequestAnimationFrame || 
	window.mozRequestAnimationFrame    || 
	window.oRequestAnimationFrame      || 
	window.msRequestAnimationFrame     || 
	function( callback ){
	    window.setTimeout(callback, 1000 / 60);
	};
})();



function OscillatorSample() {
    
    this.osc;
    this.canvas = document.querySelector('canvas');
    this.drawContext = this.canvas.getContext('2d');
    this.gain  = audioContext.createGain();
    this.gain.gain.value = 0.5;
    this.WIDTH = 640;
    this.HEIGHT = 240;
    // this.canvas.width = this.WIDTH;
    // this.canvas.height = this.HEIGHT;
    this.display = "lines";
    this.checkLines= true;
    this.song  = new Array();
    this.durations  = new Array();
    this.gap=0;
    this.startTime=0;
    this.filter = audioContext.createBiquadFilter();
    this.app = document.getElementById("app");
    this.analyser = audioContext.createAnalyser();
    this.analyser.fftSize =512;
    this.bars = new Array();
    var  Color = document.getElementById("Color");
    this.drawContext.strokeStyle = Color.value;
    this.drawContext.fillStyle = Color.value;
    this.waveType ="sawtooth";

}



OscillatorSample.prototype.stop = function() {
    if(this.osc) this.osc.stop(0);
    this.song  = [];
    this.durations  = [];
};

OscillatorSample.prototype.pause = function() {
    this.osc.stop(0);
    
};





OscillatorSample.prototype.changeFrequency = function(val) {
    this.osc.frequency.value = val;
};

OscillatorSample.prototype.changeDetune = function(val) {
    this.osc.detune.value = val;
};

OscillatorSample.prototype.changeType = function(type) {
    this.waveType = type;
    if(this.osc)
	this.osc.type= type;
};

OscillatorSample.prototype.changeFilterType= function(type) {
    this.filter.type = type;
};

OscillatorSample.prototype.changeDisplayType= function(type) {
    this.display = type; 
    if(this.osc) this.playSong();

};

OscillatorSample.prototype.changeColor= function() {
    var  Color = document.getElementById("Color");
    this.drawContext.strokeStyle = Color.value;
    this.drawContext.fillStyle = Color.value;
    

};

OscillatorSample.prototype.decreaseDensity =function(){
    if(this.analyser.fftSize > 32)
	this.analyser.fftSize  = this.analyser.fftSize/2;
}


OscillatorSample.prototype.increaseDensity =function(){
    this.analyser.fftSize  = this.analyser.fftSize*2;
}


OscillatorSample.prototype.decreaseVolume =function(){
    if(this.gain.gain.value >0.1 && this.gain.gain.value <= 1.5) 
	this.gain.gain.value =  this.gain.gain.value-0.1;
    console.log( this.gain.gain.value);
}


OscillatorSample.prototype.increaseVolume =function(){
    if(this.gain.gain.value < 1) 
	this.gain.gain.value =  this.gain.gain.value+0.1;  
}






