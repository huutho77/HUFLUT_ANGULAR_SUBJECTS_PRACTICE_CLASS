import { viewClassName } from '@angular/compiler';
import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('amountInput') amountInput!: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  ingredient!: Ingredient;

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingredientName = this.nameInput.nativeElement.value;
    const ingredientAmount = this.amountInput.nativeElement.value;

    this.ingredient = new Ingredient(ingredientName, ingredientAmount);
    this.ingredientAdded.emit(this.ingredient);
  }

}
