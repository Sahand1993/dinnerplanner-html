var DishSearcherView = function(container, model, generalController){
    var container = container;
    var model = model;
    var dishreel = container.find("#dishreel")[0];

    this.show = function(){
        container.show();
    }
    this.hide = function(){
        container.hide();
    }

    var searchCallback = function(data){
        dishreel.innerHTML = "";

        data["results"].forEach(function(result){
            console.log(result);
            var dish = document.createElement("div");
            dish.classList.add("dishsearch-dish");
            var imgframe = document.createElement("div");
            imgframe.id = result.id;
            imgframe.classList.add("imgframe");
            var img = document.createElement("img");
            img.src = model.getImageURL(result.image);
            img.classList.add("dishsearch-img");
            var par = document.createElement("p");
            var txt = document.createTextNode(result.title);
            
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
    //Insert dishes matching search term into page
    this.updateMenu = function(){
        dishreel.innerHTML = "";
        var waitElem = document.createElement("div");
        var waitText = document.createTextNode("Please wait...");
        waitElem.classList.add("dishsearch-wait");
        waitElem.appendChild(waitText);
        dishreel.appendChild(waitElem);

        var searchTerm = container.find("#searchbar").val();
        var selectTypeDropDown = container.find("#select")[0];
        var selectedIndex = selectTypeDropDown.selectedIndex;
        var dishType = selectTypeDropDown[selectedIndex].value;
        var results = model.getAllDishes(dishType, searchTerm, searchCallback);
        generalController.setCurrentType(dishType);
    }
}