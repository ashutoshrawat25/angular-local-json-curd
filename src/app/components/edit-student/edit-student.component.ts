import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private studentService: StudentService, private ActivatedRoute: ActivatedRoute) { }

  editStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  }
  );
  message: boolean;

  ngOnInit(): void {
    console.log(this.ActivatedRoute.snapshot.params.id);
    this.studentService.getStudentById(this.ActivatedRoute.snapshot.params.id).subscribe(result => {
      console.log(result);
      this.editStudent = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email'])
      }
      );
    }, error => {
      console.log(error);
    });
  }
  updateData() {
    console.log(this.editStudent.value);
    this.studentService.updateStudent(this.ActivatedRoute.snapshot.params.id, this.editStudent.value).subscribe(result => {
      console.log(result);
      this.message = true;
    }, error => {
      console.log(error);
    });

  }
  close() {
    this.message = false;
  }

}
