import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "unhealthy",
  pure: false
})

export class UnhealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {
    console.log('selected meal: ', args[1]);
    var desiredHealthState = args[0];
    if (desiredHealthState === "healthy") {
      return input.filter((meal) => {
        return meal.calories <= 300;
      });
    } else if (desiredHealthState === "unhealthy") {
      return input.filter((meal) => {
        return meal.calories > 300;
      });
    } else {
      return input;
    }
  }
}
