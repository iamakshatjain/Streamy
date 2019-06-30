import React from 'react';

import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component{
	componentDidMount(){
		window.gapi.load('client:auth2',() => {
			window.gapi.client.init({clientId:'368266589307-7nvio1cfaedrv2tuqbq9f3kaf8mj3uc6.apps.googleusercontent.com',scope:'email'})
			.then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
				});	
		});	
	}

	onAuthChange = (isSignedIn) => {
		if(isSignedIn){
			this.props.signIn(this.auth.currentUser.get().getId());
		}else{
			this.props.signOut(this.auth.currentUser.get().getId());
		}
	}

	signIn = () => {
		this.auth.signIn();
	}

	signOut = () => {
		this.auth.signOut();
	}

	renderAuthButton(){
		if(this.props.isSignedIn == null){
			return null
		}else if(this.props.isSignedIn){
			return (
					<button onClick={this.signOut} className="ui red google button">
						<i className="google icon" />
						Sign Out
					</button>
				);
		}else{
			return (
					<button onClick={this.signIn} className="ui red google button">
						<i className="google icon" />
						Sign In with Google
					</button>
				);
		}
	}

	render(){
		return <div>{this.renderAuthButton()}</div>
	}
}

const mapStateToProps = (state) =>{
	return {isSignedIn : state.auth.isSignedIn};
}

export default connect(mapStateToProps,{signIn, signOut})(GoogleAuth);