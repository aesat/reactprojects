import React from 'react'
import {Nav, Form, FormControl, Button, Navbar} from 'react-bootstrap'

class NavMenu extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">COLORS</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Pictures</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            </div>
        )
    }
}

export default NavMenu
