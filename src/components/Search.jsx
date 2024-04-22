import { useEffect, useState } from "react";
import styles from "../css/search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "a476287be3884456ad1dd6be858d331d";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="search here"
      />
    </div>
  );
}
