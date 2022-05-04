import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  studentData: any = [];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(result => {
      this.studentData = result;
      console.log(result);
    }, error => {
      console.log(error);
    });

  }
  deleteStudent(studentId) {
    console.log(studentId);
    this.studentService.deleteStudent(studentId).subscribe(result => {
      // console.log(result);
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }

}
