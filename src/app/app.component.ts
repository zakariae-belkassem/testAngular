import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AdmminTemplateComponent} from './admmin-template/admmin-template.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdmminTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TestAngular17';
}
