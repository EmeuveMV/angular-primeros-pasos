import { Component } from '@angular/core';

@Component({
  // app-heroes-list
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;


  //Los gettes se ven como si fuera propiedades
  get capitalizedName():string {
    return this.name.toUpperCase();
  }  

  // Metodo (a diferencia de las propiedades se llaman con "()")
  getHeroDescription():string{
    return `${ this.name } - ${ this.age}`;
  }

  changeHero():void{
    this.name = 'Spiderman';
  }
  changeAge():void{
    this.age = 23;
  }

  resetForm():void{
    this.name = 'iroman';
    this.age = 45;
  }
}

//Nuestros componentes y clases de ts son las 
//que tienen el control y son quienes exponen la info en html 


// En nuestras aplicaciones de angular
// hay que tratar de priorizar el one way data biding
// Es decir cambiarlo unicamente por una sola via