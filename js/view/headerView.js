var HeaderView = function(container, model){
    var container = container;
    var model = model;

    container.load("head.html");

    this.hide = function(){
        container.hide();// does it work?
    };
    this.show = function(){
        container.show();
    };
}