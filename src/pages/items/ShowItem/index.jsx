import { Link, useParams } from "react-router-dom"
import useStock from "../../../hooks/useStock"
import DeleteButton from "../../../components/DeleteButton"
import styles from "./styles.module.scss"

export default function ShowItem() {
  const { getItem } = useStock()
  const { id } = useParams()

  const item = getItem(id)

  return (
    <div className="text-center">
      <h2>{item.name}</h2>
      <div className="pt-3">
        <Link 
          to={`/items/${item.id}/update`} 
          className="me-2 my-3 btn btn-light"
        >Atualizar
        </Link>
        <DeleteButton itemId={item.id} itemName={item.name}/>
      </div>
      <div className={`${styles.statusItens} d-flex py-5`} >
        <span className="py-3 px-5 bg-dark border">Categoria: {item.category}</span>
        <span className="py-3 px-5 bg-dark border">Quantidade em estoque: {item.quantity}</span>
        <span className="py-3 px-5 bg-dark border">Preço: R$ {item.price}</span>
      </div>
      <p className="pt-3">{item.description}</p>
      <div className="pt-3 d-flex justify-content-center">
        <p className="me-5">Cadastrado em: {item.createdAt.toLocaleString('pt-BR')}</p>
        <p>Atualizado em: {item.updatedAt.toLocaleString('pt-BR')}</p>
      </div>
    </div>
  )
}