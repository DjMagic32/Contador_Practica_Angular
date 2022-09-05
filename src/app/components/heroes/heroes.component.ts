import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroesArray: string[] = ["Hulk", "Wolverine", "Superman", "Batman", "Spiderman", "Ironman", "Thor", "Captain America"];
  heroeborrado: string = '';
  borrarHeroe(): void {
    this.heroeborrado = this.heroesArray.shift() || '';
    console.log(this.heroeborrado);
    //shift() elimina el primer elemento del array
    //pop() elimina el último elemento del array
  }
  constructor() { }

  ngOnInit(): void {
  }

}
