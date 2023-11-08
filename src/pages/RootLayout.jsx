import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Navbar bg="dark" data-bs-theme="dark" className="p-3">
          <Container fluid>
            <Navbar.Brand href="/">Gestor de Estoque</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Início</Nav.Link>
              <Nav.Link href="/items">Itens</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        Desenvolvido por José Henrique Bauer
      </footer>
    </>
  )
}