import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }
  addStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  }
  );
  message: boolean;

  ngOnInit(): void {
  }
  saveData() {
    console.log(this.addStudent.value);
    this.studentService.saveStudents(this.addStudent.value).subscribe(result => {
      console.log(result);
      this.message = true;
      this.addStudent.reset({});
    }, error => {
      console.log(error);
    });
  }
  close() {
    this.message = false;
  }

}
