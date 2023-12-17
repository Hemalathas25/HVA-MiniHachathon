
import { Container } from 'react-bootstrap';
import "./style.css";

const Header = () => {
  return (
    <>
    <header>
            <Container className='head'>
              <h1 className='title'>News<span>●</span>APIOrg</h1>
              <hr className='hr'/>
              <hr className='hr'/>
              <br />
            </Container>
    </header>
    
    </>
  )
}
export default Header;