import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {
testo: number = 50

onAnchorClickadd(testo): boolean {
  this.testo = testo +10;
  return false;
}

onAnchorClicksub(testo): boolean {
  this.testo = testo -10;
  return false;
}
}
