import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root',
})

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppinglistService: ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ]),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
      [
        new Ingredient('Meat', 4),
        new Ingredient('French Fries', 30),
      ]),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
      [
        new Ingredient('Buns', 8),
        new Ingredient('French Fries', 10),
      ]),
  ];

  getRecipesData() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingresdients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingresdients);
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

}