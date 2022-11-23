import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import swal from "sweetalert";
import "./expanded.css";

async function loginUser(credentials) {
  return fetch("https://www.melivecode.com/api/login", {
  
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password,
    });
    if ("accessToken" in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        localStorage.setItem("accessToken", response["accessToken"]);
        localStorage.setItem("user", JSON.stringify(response["users"]));
        console.log(localStorage, " hiiiiiii");
        window.location.href = "/profile";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  };

  return (
    
    <Container className="main-div my-5">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
      <div className="ui message success"></div>
    ) : (
      <pre>{JSON.stringify(formvalues, undefined, 2)}</pre>
    )} */}
      <div className="ui message success"></div>

      <Form onSubmit={handleSubmit} className="my-form">
        <h1>LOGIN FORM</h1>
        <Form.Group className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the username"
            name="username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className="d-flex justify-content-center mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </Container>
  );
}
