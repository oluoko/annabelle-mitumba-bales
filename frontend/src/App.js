import { Container } from "react-bootstrap";
import Header from "./components/Header.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1> Welcome to Annabelle's Mitumba Bale's Shop</h1>
        </Container>
      </main>
    </>
  );
};

export default App;
