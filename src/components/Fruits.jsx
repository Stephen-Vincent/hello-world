import Fruit from "./Fruit";
export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana", "Orange", "Pinaapple"];
  const fruits = [
    {
      name: "Apple",
      price: 10,
      emoji: "🍎",
    },
    {
      name: "Mango",
      price: 8,
      emoji: "🥭",
    },
    {
      name: "Banana",
      price: 7,
      emoji: "🍌",
    },
  ];
  return (
    <ul>
      {fruits.map((fruit) => (
        <Fruit name={fruit.name} price={fruit.price} emoji={fruit.emoji} />
      ))}
    </ul>
  );
}
