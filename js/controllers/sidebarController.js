var SideController = function(container, model){
	var plusButton = container.find("#plusButton");
	var minusButton = container.find("#minusButton");
	plusButton[0].onclick = function(){
		model.incrNumberOfGuests();
	};
	minusButton[0].onclick = function(){
		model.decrNumberOfGuests();
	};
};