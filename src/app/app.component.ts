import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Studentproject';
}
