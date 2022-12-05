import React, { Component } from 'react';
import {Link, Navigate} from "react-router-dom";
import axios from 'axios';

class Forget extends Component {
  state = {
    email:"",
    message:""
  }
  formSubmit = e => {
    e.preventDefault();
    const data = {
      email:this.state.email,      
   }
  //post method
  axios.post('/forget-password', data)
    .then((response) => {
      this.setState({message:response.data.message});
      document.getElementById('formid').reset()
    })
    .catch((error)  => {
      this.setState({message:error.response.data.message});
    });
  }
  render() {

    //error message 
    let error ;

    if(this.state.message){
      
      error = (
        <div>
          <div className="alert alert-danger" role="alert">
            {this.state.message}
          </div>
        </div>
      )
    }
    if(localStorage.getItem('token'))
	{
		return <Navigate  to="/profile"/>
	}
    return (
      <div className="row">
            <div className="jumbotron col-lg-5 offset-lg-4">
                <h1 className="display-4 text-center">Forget Password</h1>
                <form onSubmit={this.formSubmit} id="formid">
                  {error}
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" className="form-control" onChange={e=>this.setState({email:e.target.value})}/>                       
                    </div>                                   
                    <button type="submit" className="btn btn-primary btn-block">Forget Password</button>
                    <br />
                        Have Account ? <Link to="/login">Click Here</Link> <br />
                        Don't have Account ? <Link to="/login">Click Here</Link> 
                </form>
            </div>
        </div>
    )
  }
}

export default Forget