import {MealItem} from "./MealItem";
import {useNavigate} from "react-router-dom";
const MealList = (props) => {
  const {meals} = props;
  const navigate = useNavigate();
  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Go back
      </button>
      <div className="list">
        {meals.map((meal) => (
          <MealItem key={meal.idMeal} {...meal} />
        ))}
      </div>
    </>
  );
};
export {MealList};
