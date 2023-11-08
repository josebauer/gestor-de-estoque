import { Container, Nav } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";

export default function ItemsLayout() {
  const { pathname } = useLocation()

  return (
    <main>
      <Container>
        <h1 className="py-5">ITENS EM ESTOQUE</h1>
        <Nav
          variant="tabs"
          className="mb-5"
        >
          <Nav.Item>
            <Nav.Link 
              className={`navLink ${pathname === "/items" ? "active" : ""}`} 
              href="/items"
            >Todos os Itens
            </Nav.Link>
          </Nav.Item>
          <Nav.Item> 
            <Nav.Link 
              className={`navLink ${pathname === "/items/new" ? "active" : ""}`} 
              href="/items/new"
            >Novo Item
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Outlet />
      </Container>
    </main>
  )
}