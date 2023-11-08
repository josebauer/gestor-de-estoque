import { Outlet } from "react-router-dom";

export default function ItemsLayout() {
  return (
    <main>
      <h1>Itens em Estoque</h1>
      <Outlet />
    </main>
  )
}