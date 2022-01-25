import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleComponent } from './components/pages/galle/galle.component';
import { InfoComponent } from './components/pages/info/info.component';

const routes: Routes = [
  { path: 'Gallery', component: GalleComponent },
  { path: 'add', component: InfoComponent },
  { path: '**', redirectTo: 'Gallery', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
