import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { MealListComponent } from './meal-list.component';
import { EditMealDetails } from './edit-meal-details.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent, EditMealDetails],
  template: `
    <div class='container jumbotron'>
      <h1>Meal Tracker</h1>
    </div>
    <div class='container'>
      <meal-list class="list row" [mealList] = "meals"
      (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Breakfast Burrito", "It was so freaking bomb.", 500, 0),
      new Meal("Lunch Burrito", "It was delicious, but I felt sick afterwards?", 600, 1),
      new Meal("Dinner Burrito", "Holy cow, dude. Great burrito.", 700, 2),
      new Meal("Diet Burrito", "Gotta watch my figure, man. This burrito was weak, though.", 200, 3)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {

  }
}
