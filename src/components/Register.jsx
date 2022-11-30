import React, { Component } from 'react';
import { Link, Navigate} from "react-router-dom";
import axios from 'axios';

class Register extends Component {
    state = {
        name : "",
        email: "",
        password: "",
        password_confirmation : ""
    }
    //register form
     formSubmit = e => {
        e.preventDefault();
        const data = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password_confirmation:this.state.password_confirmation
         }
        //register post method
        axios.post('/register', data)
          .then((response) => {
            localStorage.setItem('token', response.data.token)

            this.setState({
                loggedIn:true
            })
            this.props.setUser(response.data.user);
          })
          .catch((error)  => {
            console.log(error);
          });
     }
  render() {//if logged in
    if(this.state.loggedIn){
        return <Navigate  to="/profile"/>
    }

    return (
        <div className="row">
            <div className="jumbotron col-lg-5 offset-lg-4">
                <h4 className="display-4 text-center">Register Page</h4>
                <form onSubmit={this.formSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" onChange ={(e) => this.setState({name:e.target.value})}/>                       
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" name="email" onChange ={(e) => this.setState({email:e.target.value})}/>                       
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" onChange ={(e) => this.setState({password:e.target.value})}/>
                    </div>   
                    <div className="form-group">
                        <label htmlFor="password_confirmation">Password Confirm</label>
                        <input type="password" className="form-control" name="password_confirmation" onChange ={(e) => this.setState({password_confirmation:e.target.value})}/>
                    </div>                 
                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                    <br />
                        Have a Account ?<Link to="/login">Login Here</Link> <br />
                        Forgot My Password <Link to="/forget">Click Here</Link>
                </form>
            </div>
    </div>
    )
  }
}

export default Register