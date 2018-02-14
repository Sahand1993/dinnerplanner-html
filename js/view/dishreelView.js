var DishReelView = function(container, model){
	var starters = model.getAllDishes('starter');
	var mains = model.getAllDishes('main dish');
	var desserts = model.getAllDishes('dessert');

	var allDishes = [];
	allDishes.push(...starters);
	allDishes.push(...mains);
	allDishes.push(...desserts);

	for(var i=0; i<allDishes.length; i++){

		var dish = document.createElement("div");
		var imgFrame = document.createElement("div");
		var img = document.createElement("img");
		var p = document.createElement("p");

		dish.classList.add("dish", "col-lg-3", "col-md-6", "col-sm-12", "col-xs-12");
		imgFrame.classList.add("imgframe");
		img.src = "images/"+allDishes[i].image;
		p.innerHTML = allDishes[i].name;

		imgFrame.appendChild(img);
		imgFrame.appendChild(p);
		dish.appendChild(imgFrame);
		console.log(container);
		container.append(dish);
	}

}