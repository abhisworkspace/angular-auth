import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRedirectGuard } from './_guard/auth-redirect.guard';
import { AuthGuard } from './_guard/auth.guard';
import { AuthModule } from './auth/auth.module';
import { FeatureModule } from './feature-modules/feature.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => AuthModule, // Use the imported AuthModule here
    canActivate: [AuthRedirectGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () => FeatureModule,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }, // Handle any other invalid routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
