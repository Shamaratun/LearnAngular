import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
    {path: '', component: ContentComponent},
    {path: 'content', component: ContentComponent},
    {path: '**', redirectTo: ''}
];