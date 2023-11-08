import { Container, Nav } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function ItemsLayout() {
  const { pathname } = useLocation()

  return (
    <main>
      <Container>
        <h1 className="py-5">ITENS EM ESTOQUE</h1>
        <Nav
          variant="tabs"
          className="mb-5"
          defaultActiveKey="/items"
        >
          <Nav.Item>
            <Nav.Link 
              className={`navLink ${pathname === "/items" ? "active" : ""}`} 
              as={Link} 
              to="/items"
            >Todos os Itens
            </Nav.Link>
          </Nav.Item>
          <Nav.Item> 
            <Nav.Link 
              className={`navLink ${pathname === "/items/new" ? "active" : ""}`} 
              as={Link} 
              to="/items/new"
            >Novo Item
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Outlet />
      </Container>
    </main>
  )
}