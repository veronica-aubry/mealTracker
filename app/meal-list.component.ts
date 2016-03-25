import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealDetails } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { MealDetailsComponent } from './meal-details.component';
import { UnhealthyPipe } from './unhealthy.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetails, NewMealComponent, MealDetailsComponent],
  pipes: [UnhealthyPipe],
  template: `


    <select (change)="onChange($event.target.value)" class="filter">
      <option value="unhealthy">Show Unhealthy Meals</option>
      <option value="healthy">Show Healthy Meals</option>
      <option value="all" selected="selected">Show All Meals</option>
    </select>

    <div class="meals  col-sm-4">
      <meal-display class="display" *ngFor="#currentMeal of mealList | unhealthy:filterHealth "
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
  public filterHealth: string = "all";
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
  onChange(filterOption) {
    this.filterHealth = filterOption;
  }
}
