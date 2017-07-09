/*Los reducers son los encargados
de manejar los actions que tenemos*/

/*reducer takes in two things:
1. The action (info about what happened)
2. Copy of the current state
*/

/*Un punto importante de los reducers es
que si no se programa la lógica para manejar cada
tipo de action, todos los reducers se van a 
ejecutar, es por eso que es importante usar el
switch statement*/
function posts(state = [], action){
	console.log("The post will change");
	console.log(state, action);
	return state;
}

export default posts;