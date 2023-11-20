import { useRef, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import StockItem, { CATEGORIES } from "../entities/StockItem"
import useStock from "../hooks/useStock"

export default function ItemForm({ itemToUpdate }) {
  const defaultItem = {
    name: '',
    description: '',
    quantity: 0,
    price: 0,
    category: ''
  }

  const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem)
  const { addItem, updateItem } = useStock()
  const inputRef = useRef(null)

  const handleChange = (ev) => {
    setItem(currentState => {
      return {
        ...currentState,
        [ev.target.name]: ev.target.value
      }
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()

    try {
      if (itemToUpdate) {
        updateItem(itemToUpdate.id, item)
        alert('Item atualizado com sucesso!')
      } else {
        const validItem = new StockItem(item)

        addItem(validItem)
        setItem(defaultItem)

        alert('Item cadastrado com sucesso!')
      }
    } catch (error) {
      console.log(error.message)
    } finally {
      inputRef.current.focus()
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label htmlFor="name">Nome</Form.Label>
            <Form.Control
              type="text"
              name="name"
              id="name"
              required
              ref={inputRef}
              value={item.name}
              onChange={handleChange}
              className="bg-dark text-white"
              autocomplete="off"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label htmlFor="quantity">Quantidade</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              id="quantity"
              required
              min={0}
              step={1}
              value={item.quantity}
              onChange={handleChange}
              className="bg-dark text-white"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label htmlFor="price">Preço</Form.Label>
            <Form.Control
              type="number"
              name="price"
              id="price"
              required
              min={0.00}
              step={0.01}
              value={item.price}
              onChange={handleChange}
              className="bg-dark text-white"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label htmlFor="category">Categoria</Form.Label>
            <Form.Select
              type="number"
              name="category"
              id="category"
              required
              min={0.00}
              step={0.01}
              value={item.category}
              onChange={handleChange}
              className="bg-dark text-white"
            >
              <option disabled value="">Selecione uma categoria</option>
              {CATEGORIES.map((category) => (
                <option
                  key={category}
                  value={category}
                  defaultChecked={item.category === category}
                >
                  {category}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Form.Group className="mt-3">
          <Form.Label htmlFor="description">Descrição</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            id="description"
            required
            rows={6}
            value={item.description}
            onChange={handleChange}
            className="bg-dark text-white"
          ></Form.Control>
        </Form.Group>
      </Row>
      <Button className="my-3" type="submit">
        Salvar
      </Button>
    </Form>
  )
}