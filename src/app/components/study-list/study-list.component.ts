import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.css']
})
export class StudyListComponent implements OnInit {
  courselist:string[][];

  constructor() {
    //using default data
    this.courselist=[['34270', 'COMPSCI', '163'],['34300', 'COMPSCI', '167'],['35780', 'I&C', 'SCI'],['35980', 'IN4MATX', '134']];
  }

  ngOnInit(): void {
  }

}
