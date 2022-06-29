import { Component, Input, OnInit } from '@angular/core';
import { Thing } from 'src/app/shared/models/thing.model';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-thing-row',
  templateUrl: './thing-row.component.html',
  styleUrls: ['./thing-row.component.scss']
})
export class ThingRowComponent implements OnInit {

  @Input() public areaId: number = 0;

  public things: Thing[] = [];

  constructor(private httpService: MainService) { }

  public ngOnInit(): void {
    this.fetchThings();
  }

  public fetchThings(): void {
    this.httpService.getThings().subscribe((things: Thing[]) => {
      this.things = things;
    })
  }
}
