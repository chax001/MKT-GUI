import { Component, OnInit } from '@angular/core';
import { BbgboserviceService } from 'src/app/services/bbgboservice.service';

@Component({
  selector: 'app-bbgbo',
  templateUrl: './bbgbo.component.html',
  styleUrls: ['./bbgbo.component.css']
})
export class BbgboComponent implements OnInit {
 public speaker:any;
 public speakers:any;

  constructor(private bbgservice: BbgboserviceService) { }

  ngOnInit(): void {
    this.getSpeaker();
    this.getSpeakers();
  }

  getSpeaker() {
    this.bbgservice.getSpeaker().subscribe(
      data => (this.speaker = data),
      err => console.error(err),
      () => console.log('speaker loaded')
    );
  }
  getSpeakers() {
    this.bbgservice.getSpeakers().subscribe(
      data => (this.speakers = data),
      err => console.error(err),
      () => console.log('speakers loaded')
    );
  }
}
