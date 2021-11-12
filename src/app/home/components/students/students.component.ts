import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import * as _ from 'lodash';
import { Students } from './students.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  noOfClick: number = 0;
  students: any;
  studentsData: any;
  
  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.studentService.getStudents()
      .subscribe((studentsResp) => {
        this.students = studentsResp;
        this.studentsData = studentsResp;
      })
  }

  getHeaders() {
    let headers: string[] = [];
    if (this.students) {
      this.students.forEach((value: Students) => {
        Object.keys(value).forEach((key) => {
          if (!headers.find((header) => header == key)) {
            headers.push(key)
          }
        })
      })
    }
    return headers;
  }

  onSort(property: string) {
    if (this.noOfClick < 3) {
      this.noOfClick++;
    }
    if (this.noOfClick == 1) {
      this.studentsData = _.sortBy(this.students, property);
    }
    else if (this.noOfClick == 2) {
      _.reverse(this.studentsData);
    }
    else {
      this.noOfClick = 0;
      this.studentsData = this.students;
    }
  };

}

