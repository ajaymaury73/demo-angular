import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  newStudent:Student=new Student();
constructor(private studentService:StudentService){

}

ngOnInit() {
 this.getStudents();
}

// categories: ProductCategory[] = [];
//   getCategoryById(){
   
//     this.service.getCategoryById(this.userId).subscribe(
//       data=>{
//         this.categories = data as ProductCategory[];
//       }
//     )
//   }

students: Student[] = [];


getStudents(){
  this.studentService.getStudents().subscribe(data=>{
   this.students=data as Student[];
  })
}

  addStudent(student:Student) {
    this.studentService.saveUserDetais(student).subscribe(
      (response) => {

        console.log("Product saved successfully!", response);
      },
      (error) => {
        console.error("Error saving product:", error);
      }
    );
  } 

  
   

  

  


}

export class Student {
  name!: string;
  age!: string;
  className!: string;
}

