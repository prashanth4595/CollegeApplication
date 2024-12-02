import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentdetailsComponent } from './components/studentdetails/studentdetails.component';
import { LoginComponent } from './components/login/login.component';
import { TeacherdeatailsComponent } from './components/teacherdeatails/teacherdeatails.component';
import { StudentmarksdetailsComponent } from './components/studentmarksdetails/studentmarksdetails.component';
import { StudentmarksformComponent } from './components/studentmarksform/studentmarksform.component';


export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'home page'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'studentdetails',
        component:StudentdetailsComponent
    },
    {
        path:'result',
        component:StudentmarksdetailsComponent
    },
    {
        path:'marks',
        component:StudentmarksformComponent
    },
    {
        path:'teacherdetails',
        component:TeacherdeatailsComponent
    }
];
