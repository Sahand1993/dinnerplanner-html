var DishSearcherController = function(container, model, generalController, view){
    var container = container;
    var model = model;
    var dishreel = container.find("#dishreel")[0];
    var generalController = generalController;

    container.on("click", "#search-button", view.updateMenu);
//    container.on("change", "#searchbar", view.updateMenu);
    container.on("keyup", "#searchbar", function(event){
        if (event.keyCode == 13){
            view.updateMenu();
        }
    });

    container.on("click", ".imgframe", function(){
        var id = this.id; // what is "this". How do I get the ID of the dish
        console.log("id in dishSearcherController: "+id);
        generalController.showScreen("DETAILS", id);
    });
}