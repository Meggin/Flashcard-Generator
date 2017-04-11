// Create ClozeCard constructor.
// Accepts text and cloze arguments.

var BasicCard = require("./BasicCard.js");

var ClozeCard = function(text, cloze) {
	console.log("We are getting into this function.");
};

var firstPresident = new BasicCard("Who was the first president of the US?", "George Washington");

console.log(firstPresident.front);

console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the US.", "George Washington");
