import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  enroll:String[];

  constructor() {
    this.enroll = [];
  }

  addCourse(){
    // Todo: add a course to cart
  }

  getEnrollList(){
    //get the entire enroll list
    return this.enroll;
  }

  removeCourse(courseCode:String){
    //Todo: remove a course from cart
    this.enroll = this.enroll.filter(x => x != courseCode);
  }

  removeAll(){
    //Todo: remove all courses from cart
  }
}
