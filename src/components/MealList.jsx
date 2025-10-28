import {MealItem} from "./MealItem";

const MealList = (props) => {
  const {meals} = props;
  return (
    <div className="list">
      {meals.map((meal) => (
        <MealItem key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
};
export {MealList};
