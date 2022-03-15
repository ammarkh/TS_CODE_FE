import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './pages/client/add-client/add-client.component';
import { ClientComponent } from './pages/client/client.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AddProductComponent } from './pages/product/add-product/add-product.component';

import { ProductComponent } from './pages/product/product.component';
import { AddProviderComponent } from './pages/provider/add-provider/add-provider.component';
import { ProviderComponent } from './pages/provider/provider.component';


const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "/home" },
  { path: 'home', component: HomeComponent, loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule) },
  { path: "product/:id", component: ProductComponent, loadChildren: () => import('../app/pages/product/product.module').then(m => m.ProductModule) },
  { path: "service/add", component: AddProductComponent, loadChildren: () => import('../app/pages/product/product.module').then(m => m.ProductModule) },
  { path: "login/:type", component: LoginComponent, loadChildren: () => import('../app/pages/login/login.module').then(m => m.LoginModule) },
  { path: "client/dashboard", component: ClientComponent, loadChildren: () => import('../app/pages/client/client.module').then(m => m.ClientModule) },
  { path: "provider/dashboard", component: ProviderComponent, loadChildren: () => import('../app/pages/provider/provider.module').then(m => m.ProviderModule) },
  { path: "client/register", component: AddClientComponent },
  { path: "provider/register", component: AddProviderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
