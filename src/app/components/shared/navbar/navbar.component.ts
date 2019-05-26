import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private heroesService : HeroesService) { }

  ngOnInit() {
  }

  buscarHeroe( termino : string){
    let heroesCoincidentes: Heroe[] = this.heroesService.buscarHeroes(termino);
    console.log(heroesCoincidentes);
  }
}
