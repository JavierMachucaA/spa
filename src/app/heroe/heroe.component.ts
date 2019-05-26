import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../services/heroes.service';
import { Heroe } from '../components/interfaces/heroe.interface';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  
  public heroe : Heroe;

  constructor(private activatedRoute : ActivatedRoute,
              private _heroreService : HeroesService
      ) { 
    this.activatedRoute.params.subscribe(params => {
      let index= params['id'];
      this.heroe = this._heroreService.getHeroe(index);
      console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
