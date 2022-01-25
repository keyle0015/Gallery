import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
@Component({
  selector: 'app-galle',
  templateUrl: './galle.component.html',
  styleUrls: ['./galle.component.css']
})
export class GalleComponent implements OnInit {

  constructor(public GaSer: GalleryService) {
    this.GaSer.cargarArt();
  }
  
  ngOnInit(): void {
  }

}
