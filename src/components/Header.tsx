import { useContext } from "react";
import OrderContext from "../context/OrderContext";

export default function Header() {
  const { items, addItem, removeItem } = useContext(OrderContext);

  return (
    <div>
      <div>{items.length}</div>
    </div>
  );
}
