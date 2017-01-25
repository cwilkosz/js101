//Take the contents of the sonnet div and place it in a variable
var element = document.getElementById("sonnet")
console.log ("element", element);
var sonnet = element.innerHTML;
console.log("starting sonnet text", sonnet);

//Find and output the starting position of the word "orphans"
var indexOfOrphans = sonnet.indexOf("orphans");
console.log("indexOfOrphans", indexOfOrphans);

//Output the number of characters in the sonnet
console.log("sonnet char length", sonnet.length);

//Replace the first occurance of the string "winter" with "yuletide"
var newSonnet = sonnet.replace("winter", "yuletide");
console.log("yule log", newSonnet);

//Replace all occurances of the string "the" with "a large"
var globalReplace = sonnet.replace(/the /g, "a large ");
console.log("final sonnet", globalReplace);
//Set the content of the sonnet div with the new string
element.innerHTML = globalReplace;










//document.body.onload = addElement;

//function addElement () { 
  // create a new div element 
  // and give it some content 
 // var newDiv = document.createElement("div"); 
 // var newContent = document.createTextNode("Hi there and greetings!"); 
 // newDiv.appendChild(newContent); //add the text node to the newly created div. 

  // add the newly created element and its content into the DOM 
 // var currentDiv = document.getElementById("div1"); 
 // document.body.insertBefore(newDiv, currentDiv); 
//}
//function addElement ("sonnet");

//var sonnet = document.getElementById("sonnet");
//var sonnet = element.innerHTML;
//console.log("starting sonnet text", sonnet);
//var sonnet = "text";
//element.innerHTML = sonnet;
//console.log("sonnet", sonnet);



//var startposition 
//<p id="demo"></p>

//<script>
//document.getElementById("orphans").innerHTML = sonnet;
//</script>

//var winter = yuletide

//element.innerHTML = phrase;
//Paste the code below into your HTML file.
