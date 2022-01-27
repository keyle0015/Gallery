import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleComponent } from './components/pages/galle/galle.component';
import { MidisComponent } from './components/pages/midis/midis.component';

const routes: Routes = [
  { path: 'Gallery', component: GalleComponent },
  { path: 'midi', component: MidisComponent },
  { path: '**', redirectTo: 'Gallery', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
