import { Component } from '@angular/core';

@Component({
  selector: 'app-tries',
  templateUrl: './tries.component.html',
  styleUrls: ['./tries.component.css']
})
export class TriesComponent {

  public emptyHeart:string = "/assets/img/coracao_vazio.png"
  public fullHeart:string = "/assets/img/coracao_cheio.png"

}
