import { Injectable } from '@angular/core';
import { HeroesData } from './heroresData.db';
import { Heroe } from '../components/interfaces/heroe.interface';

@Injectable()
export class HeroesService {
    
    constructor() {
        console.log("[HeroesService] Init");
    }

    public getHeroes() : Heroe[]{
        return HeroesData.heroes;
    }

    public getHeroe( index : number){
        let heroes : Heroe[]= this.getHeroes();
        if(index!= null && index >=0 && index < heroes.length ){
            return heroes[index];
        }else{
            console.log("Indice enviado no es valido.");
        }
    }

}