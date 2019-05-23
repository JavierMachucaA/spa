import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../interfaces/heroe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  private heroes : Heroe [];

  constructor( private _heroresService : HeroesService, 
               private  _router : Router
    ) { }

  ngOnInit() {
    this.heroes = this._heroresService.getHeroes();
    //console.log(this.heroes);
    
  }

  verHeroe(index: number){
    console.log(index);
    this._router.navigate(['heroe',  index])
  }

  public getId(heroe : Heroe){
    return this.heroes.indexOf(heroe);
  }

}
