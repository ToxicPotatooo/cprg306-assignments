import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  return (
    <ul className="list-none">
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}
