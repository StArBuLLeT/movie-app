import { Component, OnInit } from '@angular/core'
import { AppStore } from 'src/infra/AppStore';

@Component({
  selector: 'app-loaders',
  templateUrl: './loaders.component.html',
  styleUrls: ['./loaders.component.css'],
})
export class LoadersComponent implements OnInit {
  constructor(protected appStore: AppStore) {}

  ngOnInit(): void {}
}
