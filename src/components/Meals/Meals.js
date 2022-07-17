import MealSummary from './MealSumary';
import AvailableMeal from './AvailableMeal';
import { Fragment } from 'react';
const Meal = () => {
  return (
    <Fragment>
      <MealSummary></MealSummary>
      <AvailableMeal></AvailableMeal>
    </Fragment>
  );
};
export default Meal;
