import { Link } from "react-router-dom";
import useStock from "../../hooks/useStock";
import { Table } from "react-bootstrap";
import styles from "./styles.module.scss"
import DeleteButton from "../DeleteButton";

export default function ItemsTable() {
  const { items } = useStock()

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Em Estoque</th>
          <th>Categoria</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity} unid.</td>
            <td>{item.category}</td>
            <td>
              <Link to={`/items/${item.id}`} className="btn btn-primary">
                Ver
              </Link>
              <Link to={`/items/${item.id}/update`} className="mx-2 btn btn-light">
                Atualizar
              </Link>
              <DeleteButton itemId={item.id} itemName={item.name}/>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}