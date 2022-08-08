import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import Item from "../Item";

interface MenuItemProp {
  item: Item;
}
export default function MenuItem({ item }: MenuItemProp) {
  const { items, addItem, removeItem } = useContext(OrderContext);

  return (
    <div>
      <div>Name: {item.name}</div>
      <div>Description: {item.description}</div>
      <div>Calories: {item.calories}</div>
      <div>Price: {item.price}</div>
      <div>{item.vegetarian ? "Vegetarian" : "Not Vegetarian"}</div>
      <button onClick={() => addItem(item)}>Add To Order</button>
      <button onClick={() => removeItem(item.id)}>Remove From Order</button>
    </div>
  );
}
