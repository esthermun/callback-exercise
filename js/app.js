$('#start').click(function(){
	console.log("clicked!");
	car_move_1();
});


var car = $('#car');


function car_move_1(){
	car.animate( 
	   {"left" : "700px"
	    },
	   1000, car_move_2
	);
}

var car_move_2 = function (){
	car.addClass("rotate90");
	car.animate(
		{"top" : "400px"
		  },
		1000, car_move_3
	);
}

var car_move_3 = function(){
	car.removeClass("rotate90").addClass("flip180");
	car.animate(
		{"left" : "200px"},
		1000, car_move_4
	);
}

var car_move_4 = function(){
	car.removeClass("flip180").addClass("rotate90");
	car.animate(
		{"top" : "520px"},
		1000, car_move_5
	);
}

var car_move_5 = function(){
	car.removeClass("rotate90");
	car.animate(
		{"left" : "420px"}, 
		1000
	);
	
}

