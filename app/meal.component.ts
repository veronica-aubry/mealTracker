import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div>
      <h4 class="mealName">{{ meal.name }}</h4>
      <h6 class="mealDetails"> {{ meal.details }}</h6>
      <h5 class="mealCalories">Calories: {{ meal.calories }}</h5>
    </div>

  `
})

export class MealComponent {
  public meal: Meal;
}
