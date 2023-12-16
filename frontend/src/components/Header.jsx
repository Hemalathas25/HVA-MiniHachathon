import { Navbar, Container } from 'react-bootstrap';


const Header = () => {
  return (
    <header>
        <Navbar bg="pink" variant='pink' expand='lg' collapseOnSelect>
            <Container>
              <Navbar.Brand href="/">NewsAPIOrg</Navbar.Brand>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header;