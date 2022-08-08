import { ReactNode, useState } from "react";
import { isConstructorDeclaration } from "typescript";
import Item from "../Item";
import OrderContext from "./OrderContext";

//findindex and splice?

interface Props {
  children: ReactNode;
}

export default function OrderContextProvider({ children }: Props) {
  const [items, setItems] = useState<Item[]>([]);
  const [total, setTotal] = useState<number>(0);

  function addItem(item: Item): void {
    setItems((prev) => [...prev, item]);
    setTotal((prev) => (prev += item.price));
  }

  function removeItem(id: string): void {
    const index = items.findIndex((item) => item.id === id);
    setItems((prev) => [...prev]);

    items.splice(index, 1);

    setItems(items);
    console.log(id);
  }

  return (
    <div>
      <OrderContext.Provider value={{ items, addItem, removeItem }}>
        {children}
      </OrderContext.Provider>
    </div>
  );
}
