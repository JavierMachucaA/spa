import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private heroesService : HeroesService,
              private  _router : Router
    ) { }

  ngOnInit() {
  }

  buscarHeroe( termino : string){
    this._router.navigate(['search', termino]);
  }
}
