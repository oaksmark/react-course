import Error from "./Error";
import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Modal from "./Modal.jsx";
import Button from "./UI/Button.jsx";

const requestConfig = {}; // prevent infinity loop

export default function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:30000/meals", requestConfig, []);

  // console.log(meals);

  function handleRefresh() {
    location.reload(); // este procedimento não é recomendado
  }

  if (isLoading) {
    return <p className="modal-dialog"><h2>Fetching meals...</h2></p>;
  }

  if (error) {
    return (
      <Modal open>
        <Error title="An error occurred!" message={error}>
          <Button onClick={handleRefresh}>Refresh</Button>
        </Error>
      </Modal>
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
