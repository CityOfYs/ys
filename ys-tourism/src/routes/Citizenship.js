import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import YsNavLogo from "./../YsNavLogo";
import Footer from "./../Footer";

export default function Citizenship() {
  return (
    <main>
    <Navbar bg="primary" expand="lg" variant="dark" fixed="top">
      <Container>
        <YsNavLogo />
      </Container>
    </Navbar>
      <Container fluid>
        <h2>Citizenship</h2>

        <Footer orgname="Ys City Government" email="mailto:cityofys.gov+immigration-support" />
      </Container>
    </main>
  );
}
