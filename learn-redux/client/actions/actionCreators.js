//Increment likes

/*Las acciones son objetos, son
los tipos de acciones que tenemos
disponibles*/
/*Este es el payload que regresa*/
/*Las acciones o action creators
son dispatch con información acerca
de lo que pasa*/
export function increment(index){
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

//Add comments
export function addComment(postId, author, comnent){
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

//Remove comment
export function addComment(postId,index){
	return {
		type: 'REMOVE_COMMENT',
		postId,
		idnex
	}
}