import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Register/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./Listar/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./Carrito/carrito/carrito.module').then( m => m.CarritoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
