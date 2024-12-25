import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { StatesComponent } from './page/states/states.component';
import { AboutComponent } from './page/about/about.component';
import { single } from 'rxjs';
import { SinglepageComponent } from './page/singlepage/singlepage.component';

export const routes: Routes = 
[
    {path:'',component:HomeComponent},
    {path:'states',component:StatesComponent},
    {path:'about',component:AboutComponent},
    {path:'states/:id',component:SinglepageComponent},
]
    
