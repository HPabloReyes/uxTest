import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormOneComponent } from './components/form-one/form-one.component';
import { FormTwoComponent } from './components/form-two/form-two.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SelectbarComponent } from './components/selectbar/selectbar.component';
import { ThirdsectionComponent } from './components/thirdsection/thirdsection.component';
import { AddEtapaComponent } from './components/add-etapa/add-etapa.component';

@NgModule({
  declarations: [
    AppComponent,
    FormOneComponent,
    FormTwoComponent,
    NavigationComponent,
    SelectbarComponent,
    ThirdsectionComponent,
    AddEtapaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
