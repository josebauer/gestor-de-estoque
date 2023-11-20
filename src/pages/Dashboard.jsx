import { Container, Table } from "react-bootstrap";
import useStock from "../hooks/useStock";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { items } = useStock()

  const quantityItems = items.length
  const inventoryTotal = items.reduce((sum, item) => +sum + item.quantity, 0)

  const today = new Date()
  const limitDate = new Date()

  limitDate.setDate(limitDate.getDate() - 10)

  const recentItems = items.filter((item) => item.createdAt >= limitDate && item.createdAt <= today)
  const recentTotal = recentItems.length

  const lowQuantityItems = items.filter((item) => item.quantity < 10)
  const lowQuantityTotal = lowQuantityItems.length

  return (
    <>
      <main>
        <Container>
          <h1 className="py-5">DASHBOARD</h1>
          <div className="row gap-3 px-2 text-center">
            <div className="col bg-dark p-4 border">
              <p className="h4">Diversidade de itens</p>
              <p className="h1 pt-3">{quantityItems}</p>
            </div>
            <div className="col bg-dark p-4 border">
              <p className="h4">Inventário total</p>
              <p className="h1 pt-3">{inventoryTotal}</p>
            </div>
            <div className="col bg-dark p-4 border">
              <p className="h4">Itens acabando</p>
              <p className="h1 pt-3">{lowQuantityTotal}</p>
            </div>
            <div className="col bg-dark p-4 border">
              <p className="h4">Itens recentes</p>
              <p className="h1 pt-3">{recentTotal}</p>
            </div>
          </div>
          <div className="row gap-3 align-items-start pt-5 px-2">
            <Table striped bordered hover variant="dark" className="col-md">
              <thead>
                <tr>
                  <th>Itens Recentes</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                {recentItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <Link to={`/items/${item.id}`} className="btn btn-outline-light">
                        Visualizar
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Table striped bordered hover variant="dark" className="col">
              <thead>
                <tr>
                  <th>Itens Acabando</th>
                  <th>Qtd.</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                {lowQuantityItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <Link to={`/items/${item.id}`} className="btn btn-outline-light">
                        Visualizar
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </main>
    </>
  )
}