import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Area } from 'src/app/shared/models/area.model';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  public areas$: Observable<Area[]> = of([]);

  constructor(private httpService: MainService) { }

  ngOnInit(): void {
    this.fetchAreas();
  }

  public fetchAreas(): void {
    this.areas$ = this.httpService.getAreas();
  }
}
