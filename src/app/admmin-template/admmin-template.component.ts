import {Component, OnInit} from '@angular/core';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {MatList} from '@angular/material/list';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CdkListbox} from '@angular/cdk/listbox';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-admmin-template',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButton,
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatDrawerContainer,
    MatDrawer,
    MatList,
    MatDrawerContent,
    RouterOutlet,
    RouterLink,
    CdkListbox,
    ReactiveFormsModule,
  ],
  templateUrl: './admmin-template.component.html',
  styleUrl: './admmin-template.component.css'
})
export class AdmminTemplateComponent  {

constructor(public authService: AuthService) {
}
}
