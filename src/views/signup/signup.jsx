import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'

import { Form,Button } from 'react-bootstrap';
import '../../App.css';

class Login extends Component {
  render() {
    return ( 
<div className="Login">
    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4 myform">
            <Form>
            <div class="form-header">
                Signup
                </div>
                <Form.Group controlI="username">
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group controlI="password">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlI="FullName">
                    <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group controlI="country">
                    <Form.Control type="text" placeholder="Country" />
                </Form.Group>
                <div class="row">
                <div class="col-lg-4">
                  <Link to="/login">
                    <Button variant="success" className="text-capitalize">Login</Button>
                  </Link>
                </div>
                <div class="col-lg-4"></div>
                <div class="col-lg-4">
                  <Link to="/login">
                    <Button  variant="danger" type="submit" className="text-capitalize">Signup</Button>
                  </Link>
                </div>
              </div>
            </Form>
        </div>
        <div class="col-lg-4"></div>
    </div>
</div>
    );
  }
}

export default Signup;
