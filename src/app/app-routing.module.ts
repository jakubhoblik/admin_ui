import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './others/login/login.component';
import { AuthGuard } from './others/guards/auth.guard';
import { PageGuard } from './others/guards/page.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'logs',
        loadChildren: () => import('./modules/logs-filter/logs-filter.module').then(mod => mod.LogsFilterModule),
        canActivate: [PageGuard],
        canLoad: [PageGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [PageGuard],
        canLoad: [PageGuard]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}