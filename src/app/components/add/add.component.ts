import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  courseCode:string;
  message:string

  constructor() {
    this.courseCode = "";
    this.message = "";
  }

  ngOnInit(): void {
  }

  addCourse(){
    if(this.courseCode != ""){
      this.message = "Course Code "+this.courseCode+" Added to Cart";
    }
  }
  isMessage(){
    return this.message != "";
  }

}
