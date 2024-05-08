import { Character } from './../../interfaces/character.interface';
import { ChangeDetectionStrategy, Component, EventEmitter, NgModule, Output } from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  template: `
    <h4>Agregar personaje</h4>

        <form class="row" (ngSubmit)="emitCharacter()">

        <!-- two-way data binding que se hace con el ngmodel ya se tiene acceso al objeto creado en la clase  -->
            <input 
            type="text" 
            [(ngModel)]="character.name"
            name="name" 
            class="form-control mb-2" 
            placeholder="Nombre">

            <input 
            type="number" 
            [(ngModel)]="character.power" 
            name="power"
            class="form-control mb-2" 
            placeholder="Poder">
            
            <button class="btn btn-primary">
                Agregar
            </button>

            <!-- <pre>{{ character | json }}</pre> -->
        </form>
  `,
  styleUrls: ['./add-character.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacterComponent {
    // Se crea un EventEmitter que emite un objeto de tipo Character
    // To do esto para emitir un evento al padre
    @Output() // Con esto se tiene el poder de emitir el onNewCharacter 
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character: Character = {
      name: "",
      power: 0,
    };

    emitCharacter():void{
      // debugger; // Esto crea un breakpoint en el navegador, permite depurar el app, deteniendola
      // y permitiendo revisarla
      
      
      if (this.character.name.length === 0) return;
      console.log(this.character);
      this.onNewCharacter.emit({ ...this.character });

      this.character = { name: '', power: 0 };
    }
 }
