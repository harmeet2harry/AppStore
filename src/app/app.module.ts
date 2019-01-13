import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatTabsModule, MatDrawerContainer } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { DemoMaterialModule } from './Modules/material.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { CommonModule } from '../../node_modules/@angular/common';
import { StoreDataComponent } from './store-data/store-data.component';
import { FormsModule } from '../../node_modules/@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    StoreDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
   DemoMaterialModule,
   CommonModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
