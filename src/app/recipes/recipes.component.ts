import { Component, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  constructor(private recipeService: RecipeService) { }

  selectedRecipe!: Recipe;

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe)=>{
      this.selectedRecipe = recipe;
    });
  }

}
