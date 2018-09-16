import React from 'react';
import HomeBackground from './background/HomeBackground';
import './css/signin.css';

class SignInComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onEmailChange =(event) => {
		this.setState({signInEmail: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}

	onSignInSubmit = () => {
		fetch('https://cherv-secret-santa.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.user_id){
				this.props.loadUser(user);

			}
		})
	}

render(){
	 return (
	 	<div>
	 		<HomeBackground/>
	 		<form className="signInForm" action='/' method='post'>
	 			<div className="welcomeDiv">Please Sign In
	 			</div>
	 			<div className="signInInfoDiv">
	 				<div className="infoDivSpacer"> </div>
			 		<div className="signInLabelsDiv">
			 			<label htmlFor="emailInput" className="signInLabels">Email:</label>
			 			<label htmlFor="passwordInput" className="signInLabels">Password:</label>
			 		</div>
			 		<div className="signInInputsDiv">
			 			<input 
			 				name="emailInput" 
			 				type="text"
			 				onChange={this.onEmailChange} 
			 				className="signInInputs" 
			 				placeholder="Please Enter Your Email" 
			 				required
			 			/>
			 			<input 
			 				name="passwordInput" 
			 				type="password" 
			 				onChange={this.onPasswordChange}
			 				className="signInInputs" 
			 				placeholder="Please Enter Your Password" 
			 				required
			 			/>
			 		</div>
			 		<div className="infoDivSpacer"> </div>
		 		</div>
		 		<div className="signInSubmitDiv">
		 			<input 
		 				type="button" 
		 				onClick={this.onSignInSubmit}
		 				className="signInSubmit" 
		 				value="Sign In"
		 			></input>
		 		</div>
	 		</form>
	 	</div>
	 )
	}
}

export default SignInComponent;