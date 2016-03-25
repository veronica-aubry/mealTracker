import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <h4>New Meal</h4>
      <input placeholder="Name" class="col-sm-8" #newName><br>
      <input placeholder="Details" class="col-sm-8" #newDetails><br>
      <input placeholder="Calories" class="col-sm-8" #newCalories><br>
      <button (click)="addMeal(newName, newDetails, newCalories)" class="btn btn-primary add-button col-sm-8">Add</button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Object[]>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement) {
    this.onSubmitNewMeal.emit([userName.value, userDetails.value, parseInt(userCalories.value)]);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
