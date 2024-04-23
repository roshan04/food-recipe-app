import Item from "./Item";

export default function ItemList({ isLoading, food }) {
  return (
    <div>
      <ol>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.extendedIngredients.map((item) => {
            return <Item item={item} />;
          })
        )}
      </ol>
    </div>
  );
}
