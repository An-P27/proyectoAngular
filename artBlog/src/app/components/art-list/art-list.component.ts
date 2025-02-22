import { Component, Input } from '@angular/core';
import { IArt } from '../../interfaces/iart.interface';

@Component({
  selector: 'app-art-list',
  imports: [],
  templateUrl: './art-list.component.html',
  styleUrl: './art-list.component.css',
})
export class ArtListComponent {
  @Input() arts: IArt[] = [];

  ngOnInit() {}
}
