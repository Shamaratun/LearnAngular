import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  users = [
    {
      Name: 'Meme',
      Age: 29,
      city: 'Jashore',
      Country: 'Bangladesh',
      ProfilePicture:
      "https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=1024x1024&w=is&k=20&c=CVhpekieDK_UB8vtEDw-dKKGWzDpsxcQt-XEQIkgm3Y=    "
      },
    
    {
      Name: 'Omar',
      Age: 27,
      city: 'Dhaka',
      Country: 'Bangladesh',
      ProfilePicture:
        'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
    },
    {
      Name: 'Rasel',
      Age: 28,
      city: 'Tangail',
      Country: 'Bangladesh',
      ProfilePicture: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk',
    },
  ];
}
