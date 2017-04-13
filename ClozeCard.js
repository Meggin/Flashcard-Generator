// Create ClozeCard constructor.
// Accepts text and cloze arguments.

var BasicCard = require("./BasicCard.js");

var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = function() {
		if (this.fullText.includes(this.cloze)) {
			return this.fullText.replace(this.cloze, '...');
		} else {
			var brokenClozeMessage = "Oops! The full text: '" + this.fullText + "' doesn't contain the cloze: '" + this.cloze + "'.";
			return brokenClozeMessage;
		}
	};
};

var firstPresident = new BasicCard("Who was the first president of the US?", "George Washington");

console.log(firstPresident.front);
console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the US.", "George Washington");

console.log(firstPresidentCloze.fullText);
console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.partial());

var typoPresidentCloze = new ClozeCard("Donald Trump is the current president of the US.", "Donald Frump");

console.log(typoPresidentCloze.fullText);
console.log(typoPresidentCloze.cloze);
console.log(typoPresidentCloze.partial());