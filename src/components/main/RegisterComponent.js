import React from 'react';
import RegisterBackground from './background/RegisterBackground';
import './css/signin.css';

class RegisterComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: '',
			signInPasswordTwo: '',
			errorMsg: 'Please Enter Your Password To Register'
		}
	}

	changeErrorMsg = () => {
		if (!this.state.signInPasswordTwo.length && !this.state.signInPassword.length){
			this.setState({errorMsg: 'The Password Fields Are Empty'})
		} else {
			this.setState({errorMsg: 'Uh Oh! Passwords Do Not Match'})
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}
	onPasswordTwoChange = (event) => {
		this.setState({signInPasswordTwo: event.target.value});
	}

	onRegisterSubmit = () => {
		if(this.state.signInPassword === this.state.signInPasswordTwo && this.state.signInPassword.length && this.state.signInPasswordTwo.length){
			this.setState({errorMsg: 'Attempting To Register'});
			fetch('https://cherv-secret-santa.herokuapp.com/register', {
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

				} else if (user === "Could not find user"){
					this.setState({errorMsg: 'Incorrect Credentials'})
				} else {
					this.setState({errorMsg: 'Registration Failed'})
				}
			})
		} else {
			this.changeErrorMsg();
		}
	}

render(){
	const { errorMsg } = this.state;

	 return (
	 	<div>
	 		<RegisterBackground/>
	 		<form className="signInForm">
	 			<div className="welcomeDiv">{String(errorMsg)}
	 			</div>
	 			<div className="signInInfoDiv">
	 				<div className="infoDivSpacer"> </div>
			 		<div className="signInLabelsDiv">
			 			<label htmlFor="emailInput" className="signInLabels">Email:</label>
			 			<label htmlFor="passwordInput" className="signInLabels">Password:</label>
			 			<label htmlFor="passwordTwoInput" className="signInLabels">Re-Enter:</label>
			 		</div>
			 		<div className="signInInputsDiv">
			 			<input 
			 				name="emailInput"
			 				id="emailInput" 
			 				type="text" 
			 				onChange={this.onEmailChange}
			 				className="signInInputs" 
			 				placeholder="Please Enter Your Email" 
			 				required
			 			/>
			 			<input 
			 				name="passwordInput"
			 				id="passwordInput" 
			 				type="password" 
			 				onChange={this.onPasswordChange}
			 				className="signInInputs" 
			 				placeholder="Please Enter Your Password" 
			 				required
			 			/>
			 			<input 
			 				name="passwordTwoInput"
			 				id="passwordTwoInput"  
			 				type="password" 
			 				onChange={this.onPasswordTwoChange}
			 				className="signInInputs" 
			 				placeholder="Please Re-Enter Your Password" 
			 				required
			 			/>
			 		</div>
			 		<div className="infoDivSpacer">
			 		</div>
		 		</div>
		 		<div className="signInSubmitDiv">
		 			<input 
		 				type="button" 
		 				onClick={this.onRegisterSubmit}
		 				className="signInSubmit" 
		 				value="Sign In"
		 			></input>
		 		</div>
	 		</form>
	 	</div>
	 )
	}
}

export default RegisterComponent;