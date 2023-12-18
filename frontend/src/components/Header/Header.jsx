
import { Container } from 'react-bootstrap';
import "./style.css";

const Header = () => {
  return (
    <>
    <header>
            <Container className='head'>
              <h1 className='title'>NewsAPI<span>●</span>Org</h1>
              <hr className='hr'/>
              <hr className='hr'/>
              <br />
            </Container>
    </header>
    
    </>
  )
}
export default Header;