import React, { Component } from 'react';
import {Link, Navigate} from "react-router-dom";
import axios from 'axios';

export class Login extends Component {

    state = {
        email: '',
        password: '',
        message: ''
    }

    //login function
    formSubmit = e => {
        e.preventDefault();
         const data = {
            email:this.state.email,
            password:this.state.password
         }
        //post method
        axios.post('/login', data)
          .then((response) => {
            localStorage.setItem('token', response.data.token)

            this.setState({
                loggedIn:true
            })
            this.props.setUser(response.data.user);
            // this.setState({message:response.data.message});
            // document.getElementById('fromReset').reset();
          })
          .catch((error)  => {
            this.setState({message:error.response.data.message});
          });
    }
  render() {
      //error message 
      let error ;
      // alert(this.state.message);
      if(this.state.message){
        
        error = (
          <div>
            	<div className="alert alert-danger" role="alert">
				{this.state.message}
				</div>
          </div>
        )
      }
    //if logged in
    if(this.state.loggedIn){
        return <Navigate  to="/profile"/>
    }
	if(localStorage.getItem('token'))
	{
		return <Navigate  to="/profile"/>
	}
    return (
        <div className="row">
            <div className="jumbotron col-lg-5 offset-lg-4">
                <h1 className="display-4 text-center">Login Page</h1>
                <form onSubmit ={this.formSubmit}>
                    {error}
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" className="form-control" required onChange={(e) =>{this.setState({email:e.target.value})}}/>                       
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" required onChange = {e=>this.setState({password:e.target.value})}/>
                    </div>                  
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                    <br />
                        Forget my password <Link to="/forget">Click Here</Link>
                </form>
            </div>
        </div>
    )
  }
}

export default Login