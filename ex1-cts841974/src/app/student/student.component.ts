import { Component, OnInit } from '@angular/core';
import { Student } from './student'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  student1:Student =new Student(101,"hema",45);
  student2:Student=new Student(158,"nikky",95);
  student3:Student=new Student(18,"hema",12);
}
