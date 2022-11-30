import React, { Component } from 'react';
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";

class Forget extends Component {
  render() {
    return (
      <div class="row">
            <div class="jumbotron col-lg-5 offset-lg-4">
                <h1 class="display-4 text-center">Forget Password</h1>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>                       
                    </div>                                   
                    <button type="submit" class="btn btn-primary btn-block">Forget Password</button>
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