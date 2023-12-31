import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function RootLayout() {
  const { pathname } = useLocation()

  return (
    <>
      <header>
        <Navbar data-bs-theme="dark" bg="dark" className="py-3">
          <Container>
            <Navbar.Brand as={Link} to="/">Gestor de Estoque</Navbar.Brand>
            <Nav className="me-auto" defaultActiveKey="/">
              <Nav.Link
                as={Link}
                to="/"
                className={`${pathname === "/" ? "active" : ""}`}
              >Início
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/items"
                className={`${pathname === "/items" || pathname === "/items/new" ? "active" : ""}`}
              >Itens
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <div>
        <Outlet />
      </div>
      <footer className="text-center py-3 bg-dark">
        Desenvolvido por José Henrique Bauer
      </footer>
    </>
  )
}