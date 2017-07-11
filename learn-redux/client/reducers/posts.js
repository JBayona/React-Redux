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
	/*console.log("The post will change");
	console.log(state, action);*/
	switch(action.type){
		case 'INCREMENT_LIKES':
			const index = action.index; 
			//return the updated state
			return [
				...state.slice(0, index), //Before the one we are updating
				{...state[index], likes: state[index].likes + 1},
				...state.slice(index+1), //After the one we are updating
			];
			break;
		default: return state;
	}
	return state;
}

export default posts;