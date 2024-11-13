import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {MatList} from '@angular/material/list';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admmin-template',
  standalone: true,
  imports: [
    MatToolbar,
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
    RouterLink
  ],
  templateUrl: './admmin-template.component.html',
  styleUrl: './admmin-template.component.css'
})
export class AdmminTemplateComponent {

}
