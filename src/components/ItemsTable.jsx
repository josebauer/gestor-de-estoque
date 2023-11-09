import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import { Table } from "react-bootstrap";

export default function ItemsTable() {
  const { items } = useStock()

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Em Estoque</th>
          <th>Categoria</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.category}</td>
            <td>
              <Link to={`items/${item.id}`} className="btn btn-primary">
                Ver
              </Link>
              <Link to={`items/${item.id}/update`} className="btn btn-success">
                Atualizar
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}