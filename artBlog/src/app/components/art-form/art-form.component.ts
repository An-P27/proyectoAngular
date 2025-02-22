import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IArt } from '../../interfaces/iart.interface';

@Component({
  selector: 'app-art-form',
  imports: [FormsModule],
  templateUrl: './art-form.component.html',
  styleUrl: './art-form.component.css',
})
export class ArtFormComponent {
  newArt: IArt = { title: '', about: '', date: '', image: '' };
  @Output() sendArt: EventEmitter<IArt> = new EventEmitter();

  getArt() {
    this.sendArt.emit(this.newArt);
    this.newArt = { title: '', about: '', date: '', image: '' };
  }
}
