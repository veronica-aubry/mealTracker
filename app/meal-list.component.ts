import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealDetails } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { MealDetailsComponent } from './meal-details.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetails, NewMealComponent, MealDetailsComponent],
  template: `


    <div class="meals  col-sm-4">
      <meal-display class="display" *ngFor="#currentMeal of mealList"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
      </meal-display>
    </div>

    <meal-details class="details col-sm-8" *ngIf="selectedMeal"
    [meal]="selectedMeal">
    </meal-details>

    <edit-meal-details class="col-sm-12" *ngIf="selectedMeal"
    [meal]="selectedMeal"></edit-meal-details>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})

export class MealListComponent{
  public mealList: Meal[];
  public meal = Meal;
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(values) {
    var meal = new Meal(values[0], values[1], values[2], this.mealList.length);
    this.mealList.push(meal);
  }
}
