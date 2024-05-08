import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})

export class DbzService {

    constructor() { }
    public characters: Character[] = [{
        id: uuid(),
        name: 'Krilin',
        power: 1000,
    },{
        id: uuid(),
        name: 'Goku',
        power: 9500,
    },{
        id: uuid(),
        name: 'Vegetta',
        power: 7500,
    },{
        id: uuid(),
        name: 'Marianny (Mi futura esposa)',
        power: 99999999,
    }];


    // Aqui se crea la funcion que se va a ejecutar cuando se emita el evento onNewCharacter
    // Y esta tiene como parametro character de tipo Character que es la interface
    addCharacter( character: Character ):void {
        
        const newCharacter: Character = { id: uuid(), ...character} // Esto nos dice que tome todas las propiedades y las esparsa en el objeto que tenemos ahi 
        this.characters = [...this.characters, newCharacter]; // Debido a que el componente list usa como estrategia el changedetection.onpush
        // este codigo implementado aqui lo que hace es que crea un nuevo array que contiene los personajes antiguos mas el nuevo.
        //lo que cambia la referencia al array characters y dispara la detección de cambios.
    }
    
    // this.characters.splice(index,1);
    deleteCharacterById( id: string ):void {
        this.characters = this.characters.filter( character => character.id !== id );
    }
}