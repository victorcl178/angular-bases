import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


  @Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css'
  })

  export class ListComponent {



  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  // onDeleteCharacter(index:number):void {
  //   // TODO: emitir id del personaje
  //   console.log({index})
  //   this.onDelete.emit(index);
  // }

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void {
    if (!id) return;
    console.log(id)
    this.onDelete.emit(id)
  }

}


// emitCharacter ():void {
//   console.log(this.character);
//   if ( this.character.name.length === 0) return;

//   this.onNewCharacter.emit(this.character);

//   this.character = {
//     name: '',
//     power: 0
//   };
