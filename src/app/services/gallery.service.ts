import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { art } from '../interfaces/gallery.interface';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {

  arte: art[] = [];

  constructor(private http: HttpClient) {
    this.cargarArt();
  }

  private cargarArt() {

    return new Promise((resolve, reject) => {
      this.http.get('https://portafolio-de-arte-cosa-si-default-rtdb.firebaseio.com/art.json')
        .subscribe((resp: any) => {
          this.arte = resp;
          resolve;
        });
    });
  }
}