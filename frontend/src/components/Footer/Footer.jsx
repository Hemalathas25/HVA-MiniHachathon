import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row>
                <Col className="text-center py-3">
                   <hr />
                   <p><strong>NewsAPI<span>●</span>Org</strong> is not responsible for the content of external sites </p> 
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer