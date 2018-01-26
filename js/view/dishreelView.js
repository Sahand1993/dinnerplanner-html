var DishReelView = function(container, model){
	var starters = model.getAllDishes('starter');
	var mains = model.getAllDishes('main dish');
	var desserts = model.getAllDishes('dessert');

	var allDishes = [];
	allDishes.push(...starters);
	allDishes.push(...mains);
	allDishes.push(...desserts);

	for(var i=0; i<allDishes.length; i++){
		var td = document.createElement("td");
		
		var img = document.createElement("img");
		img.classList.add("dishimg");
		img.src = "images/"+allDishes[i].image;
		
		var p = document.createElement("p");
		var text = document.createTextNode(allDishes[i].name);
		p.appendChild(text);

		td.append(img);
		td.append(p);
		container.find("tr").append(td);
	}

}