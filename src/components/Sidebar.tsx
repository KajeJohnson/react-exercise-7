import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import MenuItem from "./MenuItem";

export default function Sidebar() {
  const { items, addItem, removeItem } = useContext(OrderContext);

  return (
    <div>
      <div>
        {items.map((item) => (
          <div>
            {item.name} - {item.price}
          </div>
        ))}
      </div>
    </div>
  );
}
