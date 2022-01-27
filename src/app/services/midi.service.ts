import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { art } from '../interfaces/gallery.interface';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
  
export class MidiService {
  private apiUrl = 'https://portafolio-de-arte-cosa-si-default-rtdb.firebaseio.com/midi.json';
  midi: art[] = [];
  data: any[] = [];
  public sanitizedVideos: SafeResourceUrl[] = [];

  constructor(private http: HttpClient, private dSan: DomSanitizer) {
    this.cargarMidi();

  }

  public getMidi() {
    return this.http.get(this.apiUrl);

  }
  public cargarMidi() {

    return new Promise((resolve) => {
      this.http.get(this.apiUrl)
        .subscribe((resp: any) => {
          this.midi = resp;
          resolve;
          this.data = this.midi.map(url => url.url);
          this.sanitizedVideos = this.data.map(url => this.dSan.bypassSecurityTrustResourceUrl(url));
        });
    });
  }

  public postMidi(body: any) {
    return this.http.put(this.apiUrl, body);
  }
}
