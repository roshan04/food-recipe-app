export default function Item({ item }) {
  return (
    <div>
      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
      ></img>
      <p>{item.name}</p>
      <p>
        {item.amount} {item.unit}
      </p>
    </div>
  );
}
