import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lists-navigation',
  templateUrl: './lists-navigation.component.html',
  styleUrls: ['./lists-navigation.component.css']
})
export class ListsNavigationComponent implements OnInit {

  @Input() userName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
