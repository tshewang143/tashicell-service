import React, { Component } from 'react';
import Nav from './Nav';
import {BrowserRouter as Router, Routes,Route, NavLink} from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Register from '../components/Register';
import Trend from '../components/Trend';
import Forget from '../components/Forget';
import axios from 'axios';


class Header extends Component
{
    state = {
        user:{}
    }
    //get logged in user details
    componentDidMount() {
        axios.get('/user')
        .then((response) => {
            this.setUser(response.data)
        })
        .catch((error)  => {
          console.log(error);
        });
    }

    setUser = (user) => {
        this.setState({user:user})
    }
    render(){
        return (
                <Router>
                <div>
                    <Nav user={this.state.user}  setUser={this.setUser}/>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/login" element={<Login user={this.state.user}  setUser={this.setUser}/>} />
                        <Route path="/profile" element={<Profile user={this.state.user}/>} />
                        <Route path="/register" element={<Register user={this.state.user}  setUser={this.setUser}/>} />
                        <Route path="/trends" element={<Trend />} />
                        <Route path="/forget" element={<Forget />} />
                    </Routes>
                </div>
                </Router>
        )
    }
}

export default Header;