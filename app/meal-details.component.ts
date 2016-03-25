import { Component } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  template: `

  <div class="mealDetails">
      <h4>{{ meal.name }}</h4>
      <p>{{ meal.details }}</p>
      <p>Calories: {{ meal.calories }}</p>
    </div>
  `
})

export class MealDetailsComponent {
  public meal: Meal;
  public
}
