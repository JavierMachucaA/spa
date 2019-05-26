import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../interfaces/heroe.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public heroes : Heroe[] = [];
  public termino : string ; 

  constructor(private activatedRoute : ActivatedRoute,
              private _heroreService : HeroesService,
    ) { 
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroreService.buscarHeroes(this.termino);
      console.log(this.heroes);
    });
  }

  ngOnInit() {
  }

}
