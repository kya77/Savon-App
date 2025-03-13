import { Component } from '@angular/core';

@Component({
  selector: 'app-recettes-manager',
  templateUrl: './recettes-manager.component.html',
  styleUrl: './recettes-manager.component.css'
})
export class RecettesManagerComponent {
isLoading: any;
recettes: any;
errorMessage: any;

}
