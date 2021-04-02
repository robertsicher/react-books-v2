import React from 'react';
import { Navbar , Nav ,  } from 'react-bootstrap';


const Navigation = () => {
    return(
    <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand><i className="fas fa-book"></i> Google Books</Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link href="/">Search</Nav.Link>
        <Nav.Link href="/saved">Saved</Nav.Link>
    </Nav>
    </Navbar>
    </div>  
    )
}

export default Navigation;
