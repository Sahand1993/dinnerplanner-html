var SideController = function(container, model){
	var plusButton = container.find("#plusButton");
	var minusButton = container.find("#minusButton");
	plusButton.onclick = function(){
		alert("hello");
		model.incrNumberOfGuests();
	};
	minusButton.onclick = function(){
		model.decrNumberOfGuests();
	};
};