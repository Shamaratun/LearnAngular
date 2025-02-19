import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  //  templateUrl: './app.component.html',
   template:`
     @if (Grade.marks ==80){
       <div class="a">{{ Grade.marks }} Grade is A+ </div>
   
     } @else if(Grade.marks <= 79 && Grade.marks >= 70) {
       <div class="a">{{ Grade.marks }} Grade is A </div>


    } @else if(Grade.marks < 70 && Grade.marks >= 50){
      <div class="a">{{ Grade.marks }} Grade is A- </div>
   
   }@else{
   
      <div class="a">{{ Grade.marks }} Grade is fail </div>
    }
  
  
  <!-- <div class="b">
  Bithy Islam Chaity<br>

  Bithy Islam Chaity<br>

  Bithy Islam Chaity<br>
  </div> -->
  <!-- <table>
    <thead>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
      <th>Country</th>
      <th>Profile Picture</th>
    </thead>
    <tbody>
@for (item of users;track item.Name) {
<tr>
<td>{{item.Name}}</td>
<td>{{item.Age}}</td>
<td>{{item.city}}</td>
<td>{{item.Country}}</td>
<td><img src="{{item.ProfilePicture}}" alt="Profile Picture" width="100" height="100"></td>
</tr>
}
    </tbody>
  </table> -->
  `,
  styles: `
  .a {
     background:yellow;
      color: orange;
      font-size:50px;
      weidth:150px;
      height:150px;
  }
    // .b {
    //  background:aqua;
    //   color: orange;
    //   font-size:100px;
    //   weidth:550px;
    //   height:500px;
     
    // }
  `
})
export class AppComponent {
  title ='Grade';

  Grade = {
    marks:40
  };
//   users=[
//   {
//   Name:'Meme',
//   Age:30,
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
//     Name:"rasel",
//   Age:20,
//   city:'Jashore',
//   Country:'Bangladesh',
//   ProfilePicture:"https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
//   },
// ];
}

