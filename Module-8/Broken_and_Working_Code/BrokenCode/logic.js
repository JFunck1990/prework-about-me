//when factButton is clicked...
$("#factButton").on("click", function() { //Good

//We generate a random number between 0 and 6 (the number of facts in the booFacts)
	  var number = Math.floor((Math.random() * booFacts.length)); // good

// We display the fact from the booFacts that is in the random position we just generated.
	$("#factText").text(booFacts[number])
})


// all the boo facts were missing Quotes ("") Bring to top
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16", "making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]
// end of boo facts scripts

// Start of Text color changes

  $("#textPink").on("click", function() { 
	$("#funText").css("color", "pink")
})


$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange")
})

$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})
// End of Text color change

// Start with size change buttons

// When the boxGrow button is clicked... 
  $("#boxGrow").on("click", function() {
//$("#boxGrow").on("click", function() {
// Increase the size of the box.
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})
// End with size change