import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { PrivacyPolicyComponent } from '../app/pages/privacy-policy/privacy-policy.component';
import { RecettesCalculatorComponent } from './pages/RecetteCalculator/recettes-calculator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calculatrice', component: RecettesCalculatorComponent },
  { path: 'confidentialite', component: PrivacyPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
