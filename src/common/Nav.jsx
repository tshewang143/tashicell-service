import React, { Component } from 'react';
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";

class Nav extends Component
{
    state = {
        loggedout : " "
    }

    logout = e  => {
        localStorage.clear();
        this.props.setUser(null);
    }

    render(){
        let buttons;
        let profile;
        if(localStorage.getItem('token')){
            buttons = (
                <div>
                    <Link className="nav-link" to="" onClick={this.logout}>Logout</Link>
                </div>
            )
            profile = (
                <div>
                    <Link className="nav-link" to="/profile">Profile</Link>
                </div>
            )
        }else{
            buttons = (
                <div>
                    <ul className="navbar-nav mr-auto">                   
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            )
        }
        return (
            <div>
                <div className="card text-center">
                    <div className="card-header">
                        <h3>
                           <strong> Tashicell Online Feedback Service </strong>
                        </h3>
                        <h6>
                            We value your feedbacks to improve our services and the way we work
                        </h6>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="nav-link" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/trends">Trending Top 5 Review </Link><span className="sr-only">(current)</span>
                        </li>                    
                        <li className="nav-item">
                            {profile}
                        </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <span className="nav-text">
                            {buttons}
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav;