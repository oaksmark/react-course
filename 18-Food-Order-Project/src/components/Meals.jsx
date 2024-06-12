import { useState, useEffect } from "react";
import { fetchAvailabelMeals } from "../http";
import Error from "./Error";
import MealItem from "./MealItem.jsx";
import Cart from "./Cart.jsx";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState();
  const [errorFetch, setErrorFetch] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      //   setIsFetching(true);

      try {
      const loadedMeals = await fetchAvailabelMeals();
        setMeals(loadedMeals);
      } catch (error) {
        setErrorFetch(true)
        setError({
          message:
            error.message || "Cold not fetch meals, please try again later.",
        });
        // setIsFetching(false);
      }
    }

    fetchMeals();
  }, [errorFetch]);
  console.log(meals);

  if (errorFetch) {
    return (
      <Error
        title="An error occurred!"
        message={error.message}
        onConfirm={() => setErrorFetch(false)}
      />
    );
  }
  return (
    <section>
      {/* <h2>{title}</h2>
      {isLoading && <p className="fallback-text">{loadingText}</p>}
      {!isLoading && places.length === 0 && (
        <p className="fallback-text">{fallbackText}</p>
      )} */}
      {/* {!isLoading && places.length > 0 && ( */}
      <ul id="meals">
        <MealItem meals={meals} />
      </ul>
      {/* )} */}
    </section>
  );
}
