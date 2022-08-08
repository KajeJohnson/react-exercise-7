import { createContext } from "react";
import Item from "../Item";

interface OrderContextModel {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
}

const defaultValue: OrderContextModel = {
  items: [],
  addItem: () => {},
  removeItem: () => {},
};

const OrderContext = createContext(defaultValue);

export default OrderContext;
