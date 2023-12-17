import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
//import Fetch from "./components/Header/Fetch";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <>
    <Header />
    <main className="py-3">
    <Container>
    {/*
    <h1>Welcome To Mini-Hack</h1>
  */}
    </Container>
    </main>
    {/* <Fetch /> */}
    <Footer />
    </>
  )
};
export default App;

