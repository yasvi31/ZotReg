import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enroll-list',
  templateUrl: './enroll-list.component.html',
  styleUrls: ['./enroll-list.component.css']
})
export class EnrollListComponent implements OnInit {
  enroll:string[][];

  constructor() {
  this.enroll=[['34270', 'COMPSCI', '163'],['34300', 'COMPSCI', '167'],['35780', 'I&C', 'SCI'],['35980', 'IN4MATX', '134']];
 }

  ngOnInit(): void {
  }

  removeCourse(courseCode:string){
    this.enroll=this.enroll.filter(x => x[0] != courseCode);
  }
}
