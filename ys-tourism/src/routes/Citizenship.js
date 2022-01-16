import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'

import Footer from "./../Footer";

export default function Citizenship() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <Container>
        <h2>Citizenship</h2>

        <Footer orgname="Ys City Government" email="mailto:cityofys.gov+immigration-support" />
      </Container>
    </main>
  );
}
