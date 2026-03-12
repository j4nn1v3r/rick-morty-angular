import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  characters:any[] = [];
  loading = true;

  constructor(private characterService: CharacterService){}

  ngOnInit(){

    this.characterService.getCharacters().subscribe((data:any)=>{
      this.characters = data.results;
      this.loading = false;
    });

  }

}
