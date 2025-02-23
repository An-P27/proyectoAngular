import { Component, Input, OnChanges } from '@angular/core';
import { IArt } from '../../interfaces/iart.interface';

@Component({
  selector: 'app-art-list',
  imports: [],
  templateUrl: './art-list.component.html',
  styleUrl: './art-list.component.css',
})
export class ArtListComponent implements OnChanges {
  @Input() arts: IArt[] = [];

  ngOnChanges() {
    this.sortArtsByDate();
  }

  private sortArtsByDate() {
    this.arts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }
}
