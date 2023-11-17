import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  /* { path: 'pagina2', component: Pagina1Component },
  { path: '', component: Pagina2Component },
  { path: 'pagina3', component: Pagina3Component }, */
  { path: '', component: HomeComponent },
  {path:"contact",component:ContactComponent}
];
