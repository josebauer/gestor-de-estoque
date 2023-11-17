import { useState } from "react";
import { Button, Modal } from "react-bootstrap"
import useStock from "../hooks/useStock";
import { useNavigate } from "react-router-dom";

export default function DeleteButton({ itemId, itemName }) {
  const [show, setShow] = useState(false);
  const { deleteItem } = useStock()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()

  const handleDelete = () => {
    setShow(false)
    deleteItem(itemId)
    navigate('/items')
  }

  return (
    <>  
      <Button variant="danger" onClick={handleShow}>
        Excluir
      </Button>

      <Modal show={show} onHide={handleClose} data-bs-theme="dark">
        <Modal.Header className="bg-dark border light" closeButton>
          <Modal.Title>Excluir item</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark border">Deseja excluir o item {itemName}?</Modal.Body>
        <Modal.Footer className="bg-dark border">
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}