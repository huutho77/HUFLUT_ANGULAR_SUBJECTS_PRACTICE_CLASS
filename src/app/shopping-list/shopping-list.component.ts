import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingListservice: ShoppingListService) { }

  ingredients!: Ingredient[];

  ngOnInit(): void {
    this.ingredients = this.shoppingListservice.getIngredients();
  }

  onAddIngredient(event: Ingredient) {
    // this.ingredients.push(event);
  }

}
