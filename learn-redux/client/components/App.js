import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state){
	return{
		posts: state.posts,
		comments: state.comments
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch)
}

/*Va a agregar todo a Main*/
/*Con este método connect estamos inyectando las props
de posts, comments y los actions directamente a Main, sin tener
que ir pasando nivel por nivel hasta llegar a Main, connect nos
ayuda a eso.
Entonces va de nuestra store a Main, store piensa como en una base
de datos con los states de nuestra app, sólo debemos tener una store*/
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;