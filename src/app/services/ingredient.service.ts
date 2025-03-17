import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/Ingredient';


@Injectable({
  providedIn: 'root'
})
export class IngredientService {

    private apiUrl = 'http://localhost:8080/api-savon/v1/';

    constructor(private http: HttpClient) {}

    /**
    * Récupère tous les ingrédients depuis l'API.
    * @returns Un Observable contenant la liste des ingrédients.
    */
    getAllIngredients(): Observable<Ingredient[]> {
        return this.http.get<Ingredient[]>(`${this.apiUrl}/ingredient`);
  }

     /**
       * Récupère un ingredient par son ID.
       * @param id - L'identifiant de la recette.
       * @returns Un Observable contenant la recette correspondante.
       */
      getIngredientById(id: number): Observable<Ingredient> {
        return this.http.get<Ingredient>(`${this.apiUrl}/ingredient/${id}`);
      }
    
      /**
       * Enregistre une nouvelle recette.
       * @param ingredient - L'objet Recette à enregistrer.
       * @returns Un Observable contenant la recette enregistrée.
       */
      addIngredient(ingredient: Ingredient): Observable<Ingredient> {
        return this.http.post<Ingredient>(`${this.apiUrl}/ingredient`, ingredient);
      }
    
      /**
       * Met à jour un ingredient existante par son ID.
       * @param id - L'identifiant de la recette.
       * @param ingredient - L'objet Recette mis à jour.
       * @returns Un Observable contenant la recette mise à jour.
       */
      updateIngredient(id: number, ingredient: Ingredient): Observable<Ingredient> {
        return this.http.put<Ingredient>(`${this.apiUrl}/ingredient/${id}`, ingredient);
      }
    
      /**
       * Supprime un ingredient par son ID.
       * @param id - L'identifiant de la recette.
       * @returns Un Observable vide.
       */
      deleteIngredient(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/ingredient/${id}`);
      }

}