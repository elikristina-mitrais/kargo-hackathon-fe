import React, { Component } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import history from '../utils/history'
import { setRole } from '../utils/session'
import '../assets/css/Login.css';

const handleLogin = (state) => {
    if (state.role !== '') {
        setRole(state.role)
        history.push('/home')
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: ""
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="text-center mt-3">Login Page</h1>
                <Container>
                <div class="wrapper fadeInDown">
                <div id="formContent">
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={4}>Role</Form.Label>
                            <Col sm={6}>
                                <Form.Check
                                    type="radio"
                                    label="Transporter"
                                    name="role"
                                    id="role_transporter"
                                    value="transporter"
                                    onChange={e => this.setState({role: e.target.value})}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Shipper"
                                    name="role"
                                    id="role_shipper"
                                    value="shipper"
                                    onChange={e => this.setState({role: e.target.value})}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 6, offset: 4 }}>
                                <Button type="button" onClick={() => handleLogin(this.state)}>Login</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
                </div>
                </Container>
            </React.Fragment >
        )
    }
}

export default Login