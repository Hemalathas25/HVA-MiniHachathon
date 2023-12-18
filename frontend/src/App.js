import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import FetchAPI from "./components/FetchAPI/FetchAPI";
import Footer from "./components/Footer/Footer";
import SearchBox from "./components/SearchBox/SearchBox";



const App = () => {
  return (
    <>
    <Header /><br />
    <FetchAPI />
    <main className="py-3">
    <Container>
    <SearchBox />
    </Container>
    </main>
    <Footer />
    </>
  )
};
export default App;

