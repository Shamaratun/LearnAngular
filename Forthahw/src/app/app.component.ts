import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, ContentComponent, RouterOutlet],
  template: `
    <app-header></app-header>
    <h1>Hello {{ title }}</h1>
    <img [src]="image" alt="Profile Picture" width="100" height="100">
    <button (mouseover)="showAlert()">Click me</button>
    
    <p>{{ KeyPressed }}</p>
  
    <textarea (keyup)="onKeyUp($event)"></textarea>
    <button (onClick)="showtext">Click me</button>
    
    <app-footer></app-footer>
  `,
  styles: `
    .a {
      background: yellow;
      color: orange;
      font-size: 50px;
      width: 150px; 
      height: 150px;
    }
  `
})
export class AppComponent {
  title = 'Forthahw';
  altImg = 'logo of angular';
  image = 'https://angular.io/assets/images/logos/angular/angular.svg';
  KeyPressed = ''; 
  textfromtextarea='';
  onKeyUp(event: KeyboardEvent) {
    this.KeyPressed = (event.target as HTMLInputElement).value;
  }

  showAlert() {
    alert('dummy alert');
  }
  showtext(){
    alert(this.KeyPressed);
  }
}
