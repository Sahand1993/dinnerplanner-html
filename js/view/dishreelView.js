var DishReelView = function(container, model){
	var starter = model.getAllDishes('starter');
	var main = model.getAllDishes('main dish');
	var dessert = model.getAllDishes('dessert');

	var allDishes = [];
	allDishes.push(...starter);
	allDishes.push(...main);
	allDishes.push(...dessert);
	console.log("allDishes in dishReelView: "+allDishes);
	for(var i=0; i<allDishes.length; i++){

		var dish = document.createElement("div");
		var imgFrame = document.createElement("div");
		var img = document.createElement("img");
		var p = document.createElement("p");

		dish.classList.add("dish", "col-lg-3", "col-md-6", "col-sm-12", "col-xs-12");
		imgFrame.classList.add("imgframe");
		console.log("allDishes[i].image: "+allDishes[i].image);
		img.src = "images/"+allDishes[i].image;
		p.innerHTML = allDishes[i].name;

		imgFrame.appendChild(img);
		imgFrame.appendChild(p);
		dish.appendChild(imgFrame);
		container.append(dish);
	}
}