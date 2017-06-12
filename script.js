//#1
//Declare a variable called 'name' that has the value of your name.

var name = 'pratik';

//#2
//create an if statement that checks to see if your name is equal to 'Ben'
//If yes, log 'yes'
//otherwise log 'no'
//note: use console.log to log the string

if(name == 'Ben') {
	console.log('yes');
}
else {
	console.log('no');
}

//#3
//create an array called 'favoriteFoods'.
//fill it up with the names of several of your favorite foods

var favoriteFoods = ['pizza', 'spaghetti', 'thai food'];

//#4
//use a for loop to log each food in the 'favoriteFoods' array

for(food of favoriteFoods) {
	console.log(food);
}

//#5
//create an object called 'favoriteMovie'.
//give 'favoriteMovie' a property called 'runtime' and set it equal to how long the movie is in minutes
//give 'favoriteMovie' a property called 'title' and set it equal to the title
//give 'favoriteMovie' a property called 'director' and set it equal to the director's name

var favoriteMovie = {
	runtime: 180,
	title: 'The Matrix',
	director: 'Lana Wachowski'
};

//#6
//create a function called 'sayHi'.
//'sayHi' should accept one argument called 'name'
//when 'sayHi' is invoked it should log the string 'Hello <name>!' where <name> is equal to the 'name' argument

var sayHi = function(name) {
	console.log('Hello '+ name + '!');
}

//#7
//create an array called 'friends'
//create three objects that have information about your friends
//each object should have a 'name', 'age', and 'vocation' property with appropriate data
//put the three objects inside of the 'friends' array

var friends = [
	{
		name: 'john',
		age: 23,
		vocation: 'teaching'
	},
	{
		name: 'tim',
		age: 20,
		vocation: 'engineering'
	},
	{
		name: 'andrew',
		age: 22,
		vocation: 'teaching'
	}

]

//#8
//use a for loop to iterate over the 'friends' array from problem #7
//inside the for loop print the string 'My friend <name> is <age> years old and does <vocation> for work.'

for(friend of friends){
	console.log('My friend ' + friend.name + ' is ' + friend.age + ' years old and does ' + friend.vocation + 'for work.');
}	

//#9
//create a constructor called 'User' that can function as a class for creating new user objects
//'User' should take 'email', and 'password' as arguments 
//each instance of 'User' that is created should have a 'email', and 'password' property that is equal to the arguments passed to the constructor

function User(email, password) {
	this.email = email;
	this.password = password;
}	

//#10
//create a function called 'nFactorial(num)'
//'nFactorial' should return the factorial of the 'num' argument
//note: the factorial of 5 is (5 * 4 * 3 * 2 * 1) ->  120
//try to solve this recursively
//

var nFactorial = function(num) {
	while (num > 0) {
	    	return num * nFactorial(num - 1)
	}
	if (num == 0) {
		return 1
	}
}
