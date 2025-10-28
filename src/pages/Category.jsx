import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getFilterCategories} from "../api";
import {Preloader} from "../components/Preloader";
import {MealList} from "../components/MealList";
const Category = (props) => {
  const {name} = useParams();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    getFilterCategories(name).then((data) => setMeals(data.meals));
  }, [name]);
  return (
    <div>{meals.lenght === 0 ? <Preloader /> : <MealList meals={meals} />}</div>
  );
};

export {Category};
