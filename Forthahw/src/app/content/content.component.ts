import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

users=[
  {
  Name:'Meme',
  Age:28,
  city:'Jashore',
  Country:'Bangladesh',
  ProfilePicture:"https://placebeard.it/250/250",
  },
  {
  Name:"Omar",
  Age:27,
  city:'dhaka',
  Country:'Bangladesh',
  ProfilePicture:"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",

  },
  {
    Name:"Rasel",
  Age:28,
  city:'Tangail',
  Country:'Bangladesh',
  ProfilePicture:"https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
  },
];

}
