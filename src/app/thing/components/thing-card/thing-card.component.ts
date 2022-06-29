import { Component, Input, OnInit } from '@angular/core';
import { Thing } from 'src/app/shared/models/thing.model';

@Component({
  selector: 'app-thing-card',
  templateUrl: './thing-card.component.html',
  styleUrls: ['./thing-card.component.scss']
})
export class ThingCardComponent implements OnInit {

  @Input() public thing!: Thing;

  constructor() { }

  ngOnInit(): void {
  }
}
