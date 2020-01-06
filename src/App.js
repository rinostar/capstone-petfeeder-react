import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Button,
  Container
} from 'react-bootstrap';
import panda from './panda_icon.png';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark">
        <Navbar.Brand href="/" className="text-light">
          <img 
            src={panda}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="FoodieBear Logo"
          />
          &nbsp; FoodieBear PetFeeder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      </Navbar>
  
      <Container className="container-full">
        <Button variant="primary">Feed Now</Button>
      </Container>
      
      <footer>
        <p className="text-light">@FoodieBear</p>
      </footer>
    </div>
  );
}

export default App;
