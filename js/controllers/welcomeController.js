var WelcomeController = function(container, model, generalController){
    var container = container;
    var model = model;

    var createButton = container.find("#createButton");

    //createButton[0].onclick = function(){alert("hello");};
    container.on('click', "#createButton", function() {
        generalController.showScreen("EDIT");
    });
    /* createButton.click( function() {
        alert("entered");
        generalController.showScreen("DISHSEARCH");
    } ); */
}