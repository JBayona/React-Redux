import React from 'react';
import {Link} from 'react-router';
import Photo from './Photo';

class PhotoGrid extends React.Component{
	render(){
		return(
			<div className = "photo-grid">
				{this.props.posts.map((post,index) => 
					<Photo key = {post.code}
							{...this.props} 
							index = {index}
							post = {post} />)}
			</div>
		);
	}
};

export default PhotoGrid;