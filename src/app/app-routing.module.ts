import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMidiComponent } from './components/pages/add-midi/add-midi.component';
import { GalleComponent } from './components/pages/galle/galle.component';
import { InfoComponent } from './components/pages/info/info.component';
import { MidisComponent } from './components/pages/midis/midis.component';

const routes: Routes = [
  { path: 'Gallery', component: GalleComponent },
  { path: 'midi', component: MidisComponent },
  { path: 'add', component: InfoComponent },
  { path: 'add-mid', component: AddMidiComponent },
  { path: '**', redirectTo: '/Gallery', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
