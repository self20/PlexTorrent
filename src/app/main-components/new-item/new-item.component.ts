import { Component, OnInit,Renderer,ElementRef } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  newItemTitle:String;
  serieClass:String;
  filmClass:String;
  displayFilm:any;
  displaySerie:any;

  dom: Node;

  constructor() { 
    this.displayFilm="none";
    this.displaySerie="none";
  }

  ngOnInit() {
    this.newItemTitle="New item";

  }
  newSerie(item){
    this.filmClass="";
    this.serieClass="active";
    this.displayFilm="none";
    this.displaySerie="block";
  }
  newFilm(){
    this.filmClass="active";
    this.serieClass="";
    this.displayFilm="block";
    this.displaySerie="none";
  }

}
