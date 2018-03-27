var DishSearcherController = function(container, model, generalController, view){
    var container = container;
    var model = model;
    var dishreel = container.find("#dishreel")[0];
    var generalController = generalController;
    var select = container.find("#select");

    container.on("click", "#search-button", view.updateMenu);
//    container.on("change", "#searchbar", view.updateMenu);
    container.on("keyup", "#searchbar", function(event){
        if (event.keyCode == 13){
            view.updateMenu();
        }
    });

    container.on("click", ".imgframe", function(){
        generalController.setCurrentDish(this.id); // id is stored in imgframe element's id attribute
        var type = select.val();
        generalController.setCurrentType(type);
        generalController.showScreen("DETAILS");
    });
}