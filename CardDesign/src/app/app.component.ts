import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AppComponent],
  templateUrl: './app.component.html',


  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CardDesign';

  // users=[
  //     {
  //     Date:'2022-01-01',
  //     Reference:'Bithy ',
  //     Cusomer:'Islam ',
  //     Nb:'Chaity',
  //     Total:'$84.58',
  //     },
  //     {
  //       Date:'2022-01-05',
  //       Reference:'Mumu',
  //       Cusomer:'Muhu',
  //       Nb:'Ahir',
  //       Total:'$84.58',
  //     },
  //     {
  //       Date:'2022-01-05',
  //       Reference:'Arza',
  //       Cusomer:'Mumu',
  //       Nb:'Muhu',
  //       Total:'$84.58',
  //     },
  //     {
  //     Date:'2022-01-15',
  //       Reference:'wadi',
  //       Cusomer:'Jayek',
  //       Nb:'Zarif',
  //       Total:'$84.58',
  //     },
  //   ];
  //   user=[
  //     {
    
  //     Cusomer:'Bithy ',
  //     Product:' Islam ',
  //     Ratings:'****',
  //     },
  //     {
        
  //       Cusomer:'Arza',
  //       Product:' Islam',
  //       Ratings:'***',
  //     },
  //     {
        
  //       Cusomer:' Chaity',
  //       Product:' Chaity',
  //       Ratings:'*',
  //     },
  //     {
     
  //       Cusomer:'Chaity',
  //       Product:'jayek',
  //       Ratings:'*****',
  //     },
  //   ];
}
