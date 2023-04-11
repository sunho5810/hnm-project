import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authenticateAction } from '../redux/actions/authenticateAction'

const Login = () => {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const Navigate = useNavigate();

    const dispatch = useDispatch();

    const login = (e) => {
        e.preventDefault();
        dispatch(authenticateAction.login(id, password));
        // dispatch(authenticateAction.checkAuthenticate(true));
        Navigate("/");
    }

  return (
    <Container>
        <Form onSubmit={login}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setId(e.target.value)}
                />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="danger" type="submit">
                로그인
            </Button>
        </Form>
    </Container>
  )
}

export default Login