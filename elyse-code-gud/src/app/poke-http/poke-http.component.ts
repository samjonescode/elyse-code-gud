import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-poke-http',
  templateUrl: './poke-http.component.html',
  styleUrls: ['./poke-http.component.css']
})
export class PokeHttpComponent implements OnInit {
  apiUrl: string = "https://pokeapi.co/api/v2/pokemon/";
  pokemon;
  pokeName: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getPokeByName(name:string){
    this.http.get(this.apiUrl + name).subscribe(pokemon =>{
      this.pokemon = pokemon;
      console.log(this.pokemon);
    })
  }

}
