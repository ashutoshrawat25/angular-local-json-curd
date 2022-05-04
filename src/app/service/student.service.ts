import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'http://localhost:3000/students';
  constructor(private http: HttpClient) { }

  getAllStudents() {
    return this.http.get(this.url);
  }
  saveStudents(data) {
    return this.http.post(this.url, data);
  }
  deleteStudent(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getStudentById(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
  updateStudent(id: any, data) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
