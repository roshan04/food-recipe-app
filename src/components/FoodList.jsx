import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((foodItem) => {
        return (
          <FoodItem
            key={foodItem.id}
            foodItem={foodItem}
            setFoodId={setFoodId}
          />
        );
      })}
    </div>
  );
}
