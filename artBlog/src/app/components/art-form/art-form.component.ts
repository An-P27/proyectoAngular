import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IArt } from '../../interfaces/iart.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-art-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './art-form.component.html',
  styleUrl: './art-form.component.css',
})
export class ArtFormComponent {
  newArt: IArt = { title: '', about: '', date: '', image: '' };

  @Output() sendArt: EventEmitter<IArt> = new EventEmitter();

  @ViewChild('myForm') myForm!: NgForm;

  getArt() {
    if (this.myForm.invalid) {
      this.myForm.form.markAllAsTouched();
    }

    this.sendArt.emit(this.newArt);

    this.resetForm();
  }

  resetForm() {
    this.newArt = { title: '', about: '', date: '', image: '' };
    this.myForm.form.markAsUntouched();
  }
}
