import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SecondComponent } from './components/second/second.component';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'second', loadChildren: () => import('./components/second/second.module').then(m => m.SecondModule)},
  { path: 'customers', loadChildren: () => import('./components/customers/customers.module').then(m => m.CustomersModule) },
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
