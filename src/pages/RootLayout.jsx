import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";

export default function RootLayout() {
  const { pathname } = useLocation()

  return (
    <>
      <header>
        <Navbar data-bs-theme="dark" className="navbar p-3">
          <Container>
            <Navbar.Brand href="/">Gestor de Estoque</Navbar.Brand>
            <Nav className="me-auto" defaultActiveKey={pathname === '/' ? '/' : '/items'}>
              <Nav.Link href="/">Início</Nav.Link>
              <Nav.Link href="/items">Itens</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <div>
        <Outlet />
      </div>
      <footer className="footer text-center py-3">
        Desenvolvido por José Henrique Bauer
      </footer>
    </>
  )
}