// Constructor function for creating BasicCard objects.
var BasicCard = function(front, back) {
 this.front = front;
 this.back = back;
};

// Exports BasicCard constructor, required in ClozeCard.js.
module.exports = BasicCard;