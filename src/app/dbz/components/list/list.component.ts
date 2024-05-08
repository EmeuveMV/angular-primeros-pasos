import { ChangeDetectionStrategy, EventEmitter, Component, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  template: `
  <h4>Listado</h4>
        <!-- Cualquier atributo html 
        que se conozca se le puede decir 
        a angular que lo controle poniendole [] 
        y la expresion tiene que ser de js -->
        <ul class="list-group">
            <li *ngFor="
            let character of characterList; 
            let i = index;
            let isEven = even;
            let isOdd = odd;" 

              class="list-group-item d-flex justify-content-between align-items-center"
              [ngClass]="{
                'list-group-item-success': isEven,
            }">
            <div>
              <span class="text-primary"> {{i+1}}. </span>
              <span>{{ character.name }} - </span>
              <strong>Power: </strong> 
              <span>{{ character.power }}</span> 
            </div>
              <button class="btn btn-danger" (click)="onDeleteCharacter(character.id)" >X</button>
            
              <!-- <span> Es par: {{ isEven }}</span>
              <span> Es impar: {{ isOdd }}</span> -->

            </li>
        </ul>
  `,
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, //La estrategia ChangeDetectionStrategy.OnPush en Angular significa que la detección de cambios para ese 
  //componente se realizará solo cuando sus @Input() cambien de valor. Esto es, cuando el objeto o valor que se pasa desde el componente padre cambie.
})
export class ListComponent { 

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10,
  }];

   @Output()
   public onDelete: EventEmitter<string> = new EventEmitter();
  


  onDeleteCharacter(id?:string):void{
    if(!id) return; // Si el id no existe que no retorne nada
    this.onDelete.emit(id);
  }

}
