import { NgModule } from "@angular/core";

//Modules
import { CommonModule } from "@angular/common";

//Components
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from './list/list.component';

// Cuando estamos creando un modulo para poder utilizar el ngif or ngfor se necesita importar el commonmodule

@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports:[
        HeroComponent,
        ListComponent
    ],
    imports:[
        CommonModule
    ]
})

export class HeroesModule{

}