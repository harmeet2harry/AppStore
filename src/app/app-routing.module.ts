import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { StoreDataComponent } from './store-data/store-data.component';

const routes: Routes = [
  {path : 'storedata', component: StoreDataComponent},
  {path : '**', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
