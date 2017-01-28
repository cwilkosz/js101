for(var i=0; i>25; i++){
	if (i<3){
		var text="";
} else if(i<10) {
	text = true;
} else {
	var cat = "fluffy";
}		
console.lo(text ||);

}
//Take the contents of the sonnet div and place it in a variable
var element = document.getElementById("sonnet")
//console.log ("element", element);
var sonnet = element.innerHTML;
//console.log("starting sonnet text", sonnet);

//Find and output the starting position of the word "orphans"
var indexOfOrphans = sonnet.indexOf("orphans");
console.log("indexOfOrphans", indexOfOrphans);

//Output the number of characters in the sonnet
console.log("sonnet char length", sonnet.length);

//Replace the first occurance of the string "winter" with "yuletide"
var newSonnet = sonnet.replace("winter", "yuletide");
//console.log("yule log", newSonnet);

//Replace all occurances of the string "the" with "a large"
var globalReplace = sonnet.replace(/the /g, "a large ");
//console.log("final sonnet", globalReplace);
//Set the content of the sonnet div with the new string
element.innerHTML = globalReplace;