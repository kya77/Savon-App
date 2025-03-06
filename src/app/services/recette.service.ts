import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  private apiURL = "http://localhost:8080/api-savon/v1";

  constructor(private http: HttpClient) { }

  getAllRecette(): Observable<Recette[]> {
    return this.http.get<Recette[]>(`${this.apiURL}/recette`);
  }
}

getAllIngredient(): Observable<Ingredient[]> {
  return this.http.get<Ingredient[]>(`${this.apiURL}/ingredient`);
}