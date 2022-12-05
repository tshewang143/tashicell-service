import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Reset extends Component {
  state = {
    email:"",
    token:"",
    password:"",
    password_confirmation:"",
    message:""
  }

  formSubmit=e=>{
    e.preventDefault();
    const data = {
      token:this.state.token,
      email:this.state.email,
      password:this.state.password,
      password_confirmation:this.state.password_confirmation
    };

    axios.post("/reset-password", data)
    .then((response) =>{
      this.setState({message:response.data.message});
      document.getElementById('formid').reset()
    })
    .catch((error)=>{
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
    return (
      <div className="row">
            <div className="jumbotron col-lg-5 offset-lg-4">
                <h4 className="display-4 text-center">Reset Page</h4>
                <form onSubmit={this.formSubmit} id="formid"> 
                    {error}               
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" name="email" onChange ={(e) => this.setState({email:e.target.value})}/>                       
                    </div>
                    <div className="form-group">
                        <label htmlFor="pin_code">Pin Code</label>
                        <input type="text" className="form-control" name="token" onChange ={(e) => this.setState({token:e.target.value})}/>                       
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" onChange ={(e) => this.setState({password:e.target.value})}/>
                    </div>   
                    <div className="form-group">
                        <label htmlFor="password_confirmation">Password Confirm</label>
                        <input type="password" className="form-control" name="password_confirmation" onChange ={(e) => this.setState({password_confirmation:e.target.value})}/>
                    </div>                 
                    <button type="submit" className="btn btn-primary btn-block">Reset</button>
                    <br />
                        Have a Account ?<Link to="/login">Login Here</Link> <br />
                        Forgot My Password <Link to="/forget">Click Here</Link>
                </form>
            </div>
    </div>
    )
  }
}

export default Reset