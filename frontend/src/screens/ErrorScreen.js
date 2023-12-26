import React from "react";
import { Container } from "react-bootstrap";

function ErrorScreen() {
  return (
    <div>
      <Container>
        <h1>404 Not found.</h1>
        <h4>We cannot find the page You are looking for</h4>
      </Container>
    </div>
  );
}

export default ErrorScreen;
