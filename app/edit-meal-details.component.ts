import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  directives: [MealComponent, NewMealComponent],
  template: `
  <div class="meal-form">
    <h3>Edit Meal Details:</h3>
    <label for="mealName">Edit Meal Name:</label>
    <input [(ngModel)]="meal.name" class =" meal-name-form"/>
    <label for="mealDetails">Edit Meal Details:</label>
    <input [(ngModel)]="meal.details" class="meal-name-form"/>
    <label for="mealCalories">Edit Meal Calories:</label>
    <input [(ngModel)]="meal.calories" class="meal-name-form"/>
  </div>
  <br><br>
  `
})

export class EditMealDetails {
  public meal: Meal;
}
