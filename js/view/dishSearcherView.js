var DishSearcherView = function(container, model, generalController){
    var container = container;
    var model = model;

    this.show = function(){
        container.show();
    }
    this.hide = function(){
        container.hide();
    }

    //Insert dishes matching search term into page
    this.updateMenu = function(){
        dishreel.innerHTML = "";
        var searchTerm = container.find("#searchbar").val();
        var selectTypeDropDown = container.find("#select")[0];
        var selectedIndex = selectTypeDropDown.selectedIndex;
        var dishType = selectTypeDropDown[selectedIndex].value;
        var results = model.getAllDishes(dishType, searchTerm);
        results.forEach(function(result){
            var dish = document.createElement("div");
            dish.classList.add("dishsearch-dish");
            var imgframe = document.createElement("div");
            imgframe.id = result.id;
            imgframe.classList.add("imgframe");
            var img = document.createElement("img");
            img.src = "images/"+result.image;
            var par = document.createElement("p");
            var txt = document.createTextNode(result.name);
            
            par.appendChild(txt);
            imgframe.appendChild(img);
            imgframe.appendChild(par);
            dish.appendChild(imgframe);
            //dish.onclick = function(){
              //  var id = result.id;
                //generalController.showScreen("DETAILS", id); // I need to put this inside a controller?
           // };
            dish.classList.add("handhover");

            dishreel.appendChild(dish);

        });
    }
}