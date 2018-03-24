var DishDetailsController = function(container, model, generalController){
    container.on("click", "#details-addbutton", function(){
        model.addDishToMenu(generalController.currentDish);
    });
    container.on("click", "#details-backbutton", function(){
        generalController.showScreen("EDIT");
    });

}