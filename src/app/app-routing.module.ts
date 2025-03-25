import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { PrivacyPolicyComponent } from '../app/pages/privacy-policy/privacy-policy.component';
import { RecettesCalculatorComponent } from './pages/RecetteCalculator/recettes-calculator.component';
import { IngredientManagerPageComponent } from './pages/ingredient-manager-page/ingredient-manager-page.component';
import { RecettesComponent } from './pages/recettes/recettes.component';
import { RadarChartComponent } from './shared/radar-chart/radar-chart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calculatrice', component: RecettesCalculatorComponent },
  { path: 'confidentialite', component: PrivacyPolicyComponent },
  { path:' ingredients ', component: IngredientManagerPageComponent},
  { path: 'recettes', component: RecettesComponent},
  { path: 'radar-chart', component: RadarChartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
