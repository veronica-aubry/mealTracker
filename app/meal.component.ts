import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `

    <div class="mealDisplay">
    <p>{{ meal.name }}</p>
    </div>

  `
})

export class MealComponent {
  public meal: Meal;
  public
}
