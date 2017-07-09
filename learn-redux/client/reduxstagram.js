// let's go!
import React from 'react';
import ReactDOM from 'react-dom';

//Import CSS, webpack se encargará de importar el css
import css from './styles/style.styl';

//Import Componentes
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//Import React router devs
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

const router = (
	/*Expone el store en la app*/
	<Provider store = {store}>
		<Router history = {history}>
			<Route path ="/" component = {App}>
				<IndexRoute component = {PhotoGrid}></IndexRoute>
				<Route path ="/view/:postId" component = {Single}></Route>
			</Route>
		</Router>
	</Provider>
)


ReactDOM.render(router, document.getElementById('root'));




