import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../../services/course-service.service'

@Component({
  selector: 'app-enroll-list',
  templateUrl: './enroll-list.component.html',
  styleUrls: ['./enroll-list.component.css']
})
export class EnrollListComponent implements OnInit {
  enroll:String[];

  constructor(private courseService:CourseServiceService) {
    this.enroll = this.courseService.getEnrollList();
 }

  ngOnInit(): void {
  }

  removeCourse(courseCode:String){
    this.courseService.removeCourse(courseCode)
    this.enroll = this.courseService.getEnrollList();
  }

  enrollAll(){
    console.log("Enrollment")
  }
}
