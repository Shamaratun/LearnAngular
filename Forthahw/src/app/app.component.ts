import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{HeaderComponent} from './header/header.component';
import{FooterComponent} from'./footer/footer.component';
// import{ContentComponent}from './content/content.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  // template:`
    
  // `,
  styles: `
  .a {
     background:yellow;
      color: orange;
      font-size:50px;
      weidth:150px;
      height:150px;
  }`
  // styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Forthahw';
//   users=[
//   {
//   Name:'Meme',
//   Age:28,
//   city:'Jashore',
//   Country:'Bangladesh',
//   ProfilePicture:"https://placebeard.it/250/250",
//   },
//   {
//   Name:"Omar",
//   Age:27,
//   city:'dhaka',
//   Country:'Bangladesh',
//   ProfilePicture:"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",

//   },
//   {
//     Name:"Rasel",
//   Age:28,
//   city:'Tangail',
//   Country:'Bangladesh',
//   ProfilePicture:"https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
//   },
// ];

}
