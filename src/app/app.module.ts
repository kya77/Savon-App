import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { RecettesComponent } from './pages/recettes/recettes.component';
import { RecettesCalculatorComponent } from './pages/RecetteCalculator/recettes-calculator.component';
import { RecettesManagerComponent } from './pages/recettes-manager/recettes-manager.component';
import { IngredientListComponent } from './shared/ingredient-list/ingredient-list.component';
import { IngredientFormComponent } from './shared/ingredient-form/ingredient-form.component';
import { IngredientImportExportComponent } from './shared/ingredient-import-export/ingredient-import-export.component';
import { IngredientManagerPageComponent } from './pages/ingredient-manager-page/ingredient-manager-page.component';
import { RadarChartComponent } from './shared/radar-chart/radar-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RecettesComponent,
    RecettesCalculatorComponent,
    RecettesManagerComponent,
    IngredientListComponent,
    IngredientFormComponent,
    IngredientImportExportComponent,
    IngredientManagerPageComponent,
    RadarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}