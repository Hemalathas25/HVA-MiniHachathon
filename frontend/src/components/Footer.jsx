import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    //const current = new Date().getFullYear()
  return (
    <footer>
        <Container>
            <Row>
                <Col className="text-center py-3">
                   <p> NewsAPIOrg is not responsible for the content of external sites </p> 
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer