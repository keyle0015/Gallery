import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { art } from '../interfaces/gallery.interface'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {
  private apiUrl = 'https://portafolio-de-arte-cosa-si-default-rtdb.firebaseio.com/art.json';
  arte: art[] = [];

  constructor(private http: HttpClient) {
    this.cargarArt();
    
  }
  
  public getArt() {
    return this.http.get(this.apiUrl);
    
  }

  public cargarArt() {

    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl)
        .subscribe((resp: any) => {
          this.arte = resp;
          resolve;
        });
    });
  }
  
  public postArt(body: any) {
    return this.http.put(this.apiUrl, body);
  }
  
}