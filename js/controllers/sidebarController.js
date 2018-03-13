var SideController = function(container, model, generalController){
	var guestsInput = container.find("#numberOfGuests");
	var confirm = container.find("#confirm");
	guestsInput.change(
		function(){
			model.setNumberOfGuests(guestsInput.val());
		}
	);
	confirm.click(function(){
		generalController.showScreen("OVERVIEW");
	});
};