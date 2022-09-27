import { Component, OnInit } from '@angular/core';
import { AppStore } from 'src/infra/AppStore';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {

  constructor(protected appStore: AppStore) { }

  ngOnInit(): void {
  }

}
