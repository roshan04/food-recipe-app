import { useState } from "react";
import { useEffect } from "react";
import styles from "../css/foodDetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "a476287be3884456ad1dd6be858d331d";
  const [food, setFood] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  if (foodId != undefined) {
    useEffect(() => {
      async function fetchFood() {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data);
        setFood(data);
        setIsLoading(false);
      }
      fetchFood();
    }, [foodId]);
  }
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image}></img>
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes} minutes</strong>
          </span>
          <span>
            <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vegetarian" : "🥩Non Vegetarian"}
            </strong>
          </span>
        </div>
        <div>
          💲{" "}
          <span>
            <strong>{food.pricePerServing / 100} per person</strong>
          </span>
        </div>
        <p>Food Ingredients</p>
        <ItemList isLoading={isLoading} food={food} />
        {console.log(`roshan1: print: ${food} ::`)}
        <p>Food Instructions</p>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => {
                return <li>{step.step}</li>;
              })
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
