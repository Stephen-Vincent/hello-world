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
        <li key={fruit.name}>
          {fruit.emoji} {fruit.name} ${fruit.price}
        </li>
      ))}
    </ul>
  );
}
