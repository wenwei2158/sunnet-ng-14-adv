import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { TablesComponent } from './layout/tables/tables.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';


const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      // {
      //   path:'', redirectTo:'dashboard', pathMatch:'full'
      // },
      { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      {
        path:'dashboard',
        component:DashboardComponent//一個module
      },
      {
        path:'tables',redirectTo:'tables/1', pathMatch:'full'
      },
      {
        path:'tables/:id',
        canActivate: [AuthGuard],
        //component:TablesComponent
        loadComponent: () => import('./layout/tables/tables.component').then(m => m.TablesComponent)
      },//轉成lazy loading
      {
        path: 'utilities',
        loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule)
      }
    ]
  },
  {path:'login', component:LoginComponent},  {path:'login2', component:Login2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true,
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
