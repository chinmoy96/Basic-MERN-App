import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Container, Row, Col } from 'reactstrap';
import axios from "axios";
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            signUpName:"",
            signUpPassword:""
         };
    }
    handleOnChangeSignUpName=(e)=>{
        this.setState({
            signUpName:e.target.value
        });
    }
    handleOnChangeSignUpPassword=(e)=>{
        this.setState({
            signUpPassword:e.target.value
        });
    }
    handleSubmit= ()=>{
        let {signUpName,signUpPassword}=this.state;
        axios.post('/api/signup', {
            name: signUpName,
            password: signUpPassword
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    render() {
        return (
            <Container>
                <h1 className="display-4">Register</h1>
                <br/>
                <Row>
                    <Col md={{size:6,offset:3}}>
                    <Form>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                                <Col sm={10}>
                                    <Input type="text" name="name" value={this.state.signUpName} 
                                    onChange={this.handleOnChangeSignUpName} id="name" 
                                    placeholder="Enter Your Name" />
                                </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={2}>Password</Label>
                                <Col sm={10}>
                                    <Input type="password" name="password" id="password" 
                                    value={this.state.signUpPassword}
                                    onChange={this.handleOnChangeSignUpPassword}
                                     placeholder="Enter Your Password" />
                                </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button onClick={this.handleSubmit}>Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                    </Col>
                </Row>
                
            </Container>
           
        );
    }
}

export default SignUp;