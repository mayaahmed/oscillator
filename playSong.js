OscillatorSample.prototype.getSong  = function(k){
    if(this.osc) this.stop();    
    for(var i=0; i<songList[k].song.length; i++){
	this.song.push(songList[k].song[i]);
	this.durations.push(songList[k].durations[i]);
	this.startTime = 0;
	this.gap=0.25;
    }
    console.log(this.song);
    console.log(this.durations);
    this.playSong();
}


OscillatorSample.prototype.getNotes = function() {
    if(this.osc)  this.stop();
    var songNotes = new Array();
    var songDurations = new Array();
    var notes = document.getElementById("songNotesInput").value.split(","); 

    for(var i=0; i<notes.length; i++){
	if(notes[i] != "")
	    this.song.push(notes[i]);
    }

    var frequencies = new Array();
    for(var i=0; i<songNotes.length; i++)
	frequencies[i]= getFrequency(songNotes[i]);

    var durationsString  = document.getElementById("songDurationsInput").value.split(",");
    for(var k=0; k<durationsString.length;k++){
	if(durationsString[k] != ""){
	    
	    var temp = eval(durationsString[k]);
	    temp = parseFloat(temp);
	    this.durations.push(temp);
	}
    }
    console.log(this.song);
    console.log(this.durations);
    this.startTime = 20;
    this.gap=0.25;
    this.playSong();
};



OscillatorSample.prototype.playSong = function(){
    
    //initialize    
    if(this.osc) this.osc.stop(0);
    this.drawContext.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear the this.canvas
    // create and connect oscillators    
    this.osc = audioContext.createOscillator();
    var modulator = audioContext.createOscillator();
    this.osc.type= this.waveType;
    modulator.connect(this.osc.frequency);
    this.osc.connect(this.analyser).connect(this.gain).connect(this.filter).connect(audioContext.destination);

    var frequencies = new Array();
    for(var i=0; i<this.song.length; i++)
	frequencies[i]= getFrequency(this.song[i]);
    var startTime = audioContext.currentTime;
    this.osc.start(startTime);
    for(var i=0; i<this.song.length; i++){

	this.osc.frequency.setValueAtTime(frequencies[i], startTime);
 	this.gain.gain.linearRampToValueAtTime(1, startTime + attack);
	this.gain.gain.linearRampToValueAtTime(sustain, startTime + attack +decay);

	startTime = startTime+this.durations[i]+ this.gap; 
	// release = startTime;
	this.gain.gain.setTargetAtTime(0, startTime+attack + decay+release, 0.5);	
    }
    
    if(this.display=="lines")  requestAnimFrame(this.drawLines.bind(this));

    else if(this.display=="waves") requestAnimFrame(this.drawWaves.bind(this));

    else
	requestAnimFrame(this.drawCircles.bind(this)); 

    
    
    this.osc.stop(startTime+release+1);

    this.osc.onended = function() {
	console.log('Your tone has now stopped playing!'); 

    }

    
}




