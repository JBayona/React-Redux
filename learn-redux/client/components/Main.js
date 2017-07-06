import React from 'react';
import {Link} from 'react-router';

class Main extends React.Component{
	render(){
		return (
			<div>
				<Link to="/"><h1>Reduxstagram</h1>}</Link>
			</div>
		);
	}
};

export default Main;