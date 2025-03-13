import { Component } from '@angular/core';
import { Ingredient } from '../../models/Ingredient';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-recettes-calculator',
  templateUrl: './recettes-calculator.component.html',
  styleUrl: './recettes-calculator.component.css'
})
export class RecettesCalculatorComponent {
errorMessage: string = "";
isLoading: boolean = true;
ingredients: Ingredient[] = [];


    constructor(private ingredientService: IngredientService) {}

    ngOnInit(): void{
      this.fetchIngredients();
    }

    /**
* Récupère la liste des ingrédients depuis l'API
*/
    fetchIngredients(): void {
      this.ingredientService.getAllIngredients().subscribe({
      next: (data: Ingredient[]) => {
      this.ingredients = data;
      this.isLoading = false;
  },
    error: (error: any) => {
    this.errorMessage = "Erreur lors du chargement des ingrédients.";
    console.error("Erreur API:", error);
    this.isLoading = false;
  }
  });
  }

}
