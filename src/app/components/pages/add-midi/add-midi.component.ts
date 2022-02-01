import { Component, OnInit } from '@angular/core';
import { MidiService } from 'src/app/services/midi.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-midi',
  templateUrl: './add-midi.component.html',
  styleUrls: ['./add-midi.component.css']
})
export class AddMidiComponent implements OnInit {

  formulario = new FormGroup({
    desc: new FormControl(),
    name: new FormControl(),
    url: new FormControl(),
    year: new FormControl()
  });


  midi: any[] = [];
  body: any[] = [];
  c = 0;

  constructor(private midSer: MidiService,
    private fb: FormBuilder) {
    console.log(midSer.midi)
    for (let item of midSer.midi) {

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
  //https://youtu.be/kr43g2gSybo
  guardar(): void {
    var url: string = this.formulario.get("url")?.value;
    url = url.replace("watch?v=", "embed/");
    url = url.replace("youtu.be", "youtube.com/embed");

    this.formulario.patchValue({"url":url})    
    
    const data = {
      [this.c]: this.formulario.value
    };
    
    if (this.formulario.status === 'VALID') {
      this.midSer.midi.push(this.formulario.value);

      this.midSer.postMidi(this.midSer.midi).subscribe(res => {
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
