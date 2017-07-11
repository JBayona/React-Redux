import React from 'react';
import {Link} from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component{
	render(){
		//Index of the post
		const index = this.props.posts.findIndex(post => post.code === 
			this.props.params.postId);
		//Get us the post
		const post = this.props.posts[index];
		return(
			<div className = "single-photo">
				<Photo index={index} post= {post}{...this.props} />
				<Comments />
			</div>
		);
	}
};

export default Single;