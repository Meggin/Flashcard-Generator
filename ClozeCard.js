// Create ClozeCard constructor.
// Accepts text and cloze arguments.

var BasicCard = require("./BasicCard.js");

var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
};

// Returns partial text
ClozeCard.prototype.returnPartialText = function()  {
 	
 	if (this.fullText.includes(this.cloze)) {
 		var partial = this.fullText.replace(this.cloze, '...');
 		console.log("Partial: " + partial);
 		return this.partial;
 	} else {
 		console.log("Oops! Looks like " + this.fullText + " does not contain " + this.cloze);
 	}

}

var firstPresident = new BasicCard("Who was the first president of the US?", "George Washington");

console.log(firstPresident.front);

console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the US.", "George Washington");

firstPresidentCloze.returnPartialText();