import MenuItem from "./MenuItem";
import Item from "../Item";

export default function MenuList() {
  let menuItems: Item[] = [
    {
      id: "111",
      name: "Gyro",
      description: "Lamb, tziki, wrap, feta",
      calories: 400,
      price: 2.5,
      vegetarian: false,
    },

    {
      id: "222",
      name: "Chili Cheese Fries",
      description: "Chili and cheese on fries",
      calories: 900,
      price: 3,
      vegetarian: false,
    },

    {
      id: "333",
      name: "Coffee",
      description: "Coffee",
      calories: 150,
      price: 1.5,
      vegetarian: true,
    },
  ];

  return (
    <div className="MenuList">
      {menuItems.map((item) => (
        <MenuItem item={item} />
      ))}
    </div>
  );
}
