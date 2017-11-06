import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './login/signup.component';
import { AuthGuard } from './security/auth-guard';

const routes: Routes=[
    { path: '', redirectTo:'/login', pathMatch:'full'},
    { path: 'login', component: LoginComponent },
    { path: 'home/:id', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'signup', component: SignupComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
           
}
