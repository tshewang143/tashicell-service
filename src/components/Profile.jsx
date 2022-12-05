import React, { Component } from 'react';
import {Navigate} from "react-router-dom";

export class Profile extends Component {
  render() {
	let name ;
	let email;

	if(this.props.user){
		name = this.props.user.name;
		email = this.props.user.email;
	}

	if(!localStorage.getItem('token'))
	{
		return <Navigate  to="/login"/>
	}
    return (
      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
    	<div className="card col-lg-3"> <div className=" image d-flex flex-column justify-content-center align-items-center"> 
        <button className="btn btn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" />
        </button> <span className="name mt-3">{name}</span> 
        <span className="idd">{email}</span> 
        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
             <span className="idd1">Oxc4c16a645_b21a</span> <span><i className="fa fa-copy"></i></span> </div>
              <div className="d-flex flex-row justify-content-center align-items-center mt-3"> 
                  <span className="number">1069 <span className="follow">Followers</span></span> </div>
                  
                   <div className=" d-flex mt-2"> <button className="btn1 btn-dark">Edit Profile</button> </div>
                    <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> 
                        <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span> 
                        <span><i className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span> </div> 
                        <div className=" px-2 rounded mt-4 date "> <span className="join">Joined May,2021</span> </div> 
				</div> 
			</div>
    	</div>
    )
  }
}

export default Profile