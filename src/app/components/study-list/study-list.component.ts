import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.css']
})
export class StudyListComponent implements OnInit {
  courselist:string[][];
  message:string;

  constructor() {
    //using default data
    this.courselist=[['34270', 'COMPSCI', '163'],['34300', 'COMPSCI', '167'],['35780', 'I&C', 'SCI'],['35980', 'IN4MATX', '134']];
    this.message = "";
  }

  ngOnInit(): void {
  }

  change(courseCode:string): void{
    this.message = "Grade Changed to P/NP for "+courseCode;
  }

  drop(courseCode:string): void{
    this.message = "Class Dropped Successfully";
    this.courselist = this.courselist.filter(x => x[0] != courseCode);
  }

  isMessage(): Booleen{
    return this.message != "";
  }

}
