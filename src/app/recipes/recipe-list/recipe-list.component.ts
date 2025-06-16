import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',

})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://thumbs.dreamstime.com/b/recipe-word-text-green-leaf-logo-icon-design-black-background-suitable-card-typography-147082451.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test','https://thumbs.dreamstime.com/b/recipe-word-text-green-leaf-logo-icon-design-black-background-suitable-card-typography-147082451.jpg')
  ];

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
