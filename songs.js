function Song(){
this.song  = new Array();
this.durations  = new Array();
}

 songList = new Array();


// Song 0

var twinkle = new Song();
twinkle.song = ['c3', 'c3', 'g4','g4', 'a4', 'a4', 'g4',  
            'f4', 'f4', 'e4', 'e4', 'd3', 'd3', 'c3', 
            'g4', 'g4', 'f4', 'f4', 'e4', 'e4', 'd3',
            'g4', 'g4', 'f4', 'f4', 'e4', 'e4', 'd3'];

twinkle.durations = [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 
0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.75,
0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25,
0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.75];

songList.push(twinkle);

// Song 1

var lara = new Song();

lara.song = ['b3', 'd3', 'a#4', 'b4', 
	'f4', 'a4', 'g4',   'd3', 'c#3', 'c3',
	'c3', 'd3', 'e4',   'f4',
	'e4', 'd3', 'c#3', 'd3',    'c4', 'b4',
	   'b3', 'd3', 'a#4', 'b4', 
	'f4', 'a4', 'g4',   'd3', 'c#3', 'c3',
	'c3', 'd3', 'e4',   'f4',
	'e4', 'd3', 'c#3', 'd3',    'c4', 'b4'
]
 lara.durations = [0.75, 0.75, 0.25, 0.75, 
	    0.25, 0.25, 0.25, 0.75, 0.25, 0.75,
		0.75, 0.75, 0.25, 0.75, 
	    0.25, 0.25, 0.25, 0.75, 0.25, 0.75,
		0.75, 0.75, 0.25, 0.75, 
	    0.25, 0.25, 0.25, 0.75, 0.25, 0.75,
		0.75, 0.75, 0.25, 0.75, 
	    0.25, 0.25, 0.25, 0.75, 0.25, 0.75
]
songList.push(lara);

//song 2

var jana = new Song(); 

jana.song= [
'c4', 'd4', 'e4', 'e4','e4' , 'e4','e4', 'e4','e4', 'e4','e4',  'd4', 'e4','f4',
'e4', 'e4', 'e4', 'd4', 'd4', 'd4', 'b3', 'd4', 'c4',
'c4', 'g4', 'g4', 'g4', 'g4', 'g4', 'g4', 'f#4', 'g4', 'g4', 'g4', 'g4', 'f#4','g4',
'f4', 'f4','f4', 'f4', 'f4', 'f4', 'd4', 'f4', 'e4',
'e4', 'e4','e4', 'e4', 'e4', 'd4', 'g4', 'g4', 'g4', 'f4', 'f4', 'f4',
'e4', 'e4','e4', 'd4', 'd4', 'd4', 'd4', 'b3', 'd4', 'c4',
'e4', 'e4','e4', 'e4',  'e4', 'e4',  'f4', 'd4', 'e4', 'f4',
'e4','f4', 'g4', 'g4', 'g4', 'f4', 'e4', 'd4', 'f4', 'e4',
'e4', 'e4', 'd4','d4','d4','d4', 'b3', 'd4', 'c4',
'g4', 'g4', 'g4', 'g4', 'g4', 'g4', 'f#4', 'g4', 'g4',  'f#4', 'g4', 'f4', 'g4',
'f4', 'f4', 'f4', 'f4',  'e4', 'f4', 'd4', 'f4', 'e4',
'b4', 'b4', 'c5', 'b4', 'a4', 'b4', 'g4', 'g4', 'a4',
'c4', 'c4', 'd4', 'd4', 'e4', 'e4', 'd4', 'e4', 'f4'
];





jana.durations = [
0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.25, 0.25, 0.25, 0.25, 0.5,
0.5, 0.25, 0.25, 0.5, 0.25, 0.25, 0.25, 0.25, 1.5,
0.5, 0.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.25, 0.25, 0.25, 0.25, 0.5,
0.5, 0.25, 0.25, 0.5, 0.25, 0.25, 0.25, 0.25, 1.5,
0.5, 0.25, 0.25, 0.5, 0.25, 0.25, 0.25, 0.25,0.25, 0.25,0.5, 0.5,
0.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 1.5,
0.25, 0.25, 0.25, 0.25, 0.5, 0.25, 0.25, 0.25,0.25, 1.5, 
0.25, 0.25, 0.25, 0.25, 0.5, 0.25, 0.25, 0.25,0.25, 1.5, 
0.5, 0.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 1.5,

0.25, 0.25, 0.25, 0.25, 0.5, 0.25, 0.25, 0.5, 0.25, 0.25, 0.25, 0.25,  0.5,
0.5, 0.25, 0.25, 0.5, 0.25, 0.25, 0.25, 0.25, 1.0,
0.25, 0.25, 1.5, 0.25, 0.25, 1.5, 0.25, 0.25, 2.0, 
0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 2.0

];

songList.push(jana);