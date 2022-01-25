import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GalleryService } from 'src/app/services/gallery.service';
import { art } from '../../../interfaces/gallery.interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  formulario = new FormGroup({
    desc: new FormControl(),
    name: new FormControl(),
    url: new FormControl(),
    year: new FormControl()
  });
  
  imgUrl = "https://cdn.discordapp.com/attachments/333027898753548299/897391408195985478/Penguin_dance1.h2.gif";
  
  arte: any[] = [];
  body: any[] = [];
  c = 0;
  
  constructor(private gaSer: GalleryService,
    private fb: FormBuilder) {
    console.log(gaSer.arte)
    for (let item of gaSer.arte) {
      
      this.c++;
      console.log(this.c);
    }
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      desc: [],
      name: [],
      url: [],
      year: []
    });
  }
  
  onUrlInsert(urlInsert: string): void {
    this.imgUrl = urlInsert;
  }
  
  guardar(): void {
    const data = {
      [this.c]: this.formulario.value
    };
    if (this.formulario.status === 'VALID') {
      this.gaSer.arte.push(this.formulario.value);

      console.log(this.gaSer.arte);
      this.gaSer.postArt(this.gaSer.arte).subscribe(res => {
        console.log(res);
      });
      this.formulario = this.fb.group({
        desc: [],
        name: [],
        url: [],
        year: []
      });
    }
    
  }

}
