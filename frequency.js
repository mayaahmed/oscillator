// octave 0

var freq = {
    "s": 0,           
    "c": 16.351,
    "c#": 17.324,
    "db": 17.324,
    "d": 18.354,
    "d#": 19.445,
    "eb": 19.445,
    "e": 20.601,
    "f": 21.827,
    "f#": 23.124,
    "gb": 23.124,
    "g": 24.499,
    "g#": 25.956,
    "ab": 25.956,
    "a": 27.5,
    "a#": 29.135,
    "bb": 29.135,
    "b": 30.868
};

function getFrequency(s){

    var str = s.toLowerCase();
if(str=='s') return freq[str];

  else  if(str[1]=='#' || str[1]=='b'){
	var temp = str[0]+str[1];
	if(freq[temp])
	    return freq[temp]*Math.pow(2,str[2]);
	else alert("Error!"+ str + "is not a valid note"); 
    }
    else{
	if(freq[str[0]]){
	    return freq[str[0]]*Math.pow(2,str[1]);
	}
	else alert("Error!"+ str + "is not a valid note"); 
    }

}












