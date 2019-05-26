import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';


const ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', pathMatch : 'full', redirectTo : 'home' },

];

export const APP_ROUTNG = RouterModule.forRoot(ROUTES, /*{useHash : true}*/);