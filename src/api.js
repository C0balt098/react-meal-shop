import API_URL from "./config";

const getMealById = async (mealId) => {
  const res = await fetch(API_URL + `lookup.php?i=${mealId}`);
  const meal = await res.json();
  return meal;
};
//www.themealdb.com/api/json/v1/1/categories.php
const getAllCategories = async () => {
  const res = await fetch(API_URL + `categories.php`);
  const meals = await res.json();
  return meals;
};

const getFilterCategories = async (catagoryName) => {
  const res = await fetch(API_URL + `filter.php?c=${catagoryName}`);
  const meals = await res.json();
  return meals;
};
export {getMealById, getAllCategories, getFilterCategories};
