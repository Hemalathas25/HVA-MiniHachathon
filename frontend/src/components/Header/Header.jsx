import { Container, Form, Button } from 'react-bootstrap';
import "./style.css";

const Header = () => {
  return (
    <>
    <header>
            <Container className='head'>
              <h1 href="/">NewsAPIOrg</h1>
              <hr />
              <hr />
            </Container>

            <Form className='searchBox'>
              <input type='text' placeholder='search' />
              <Button type='submit'>Go</Button>
            </Form>
    </header>
    </>
  )
}
export default Header;