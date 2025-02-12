import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { UrlConstant } from "./url-constant.service";
import { Student } from "../student/student.component";

@Injectable({
    providedIn: 'root'
  })
  export class StudentService {
   
  
    constructor(private dataService: DataService,private urlConstant: UrlConstant) {
      
     }
    

     saveUserDetais(student:Student){
        const url = `${this.urlConstant.SERVER_PORT}`;
      
          return this.dataService.addObject(url+ 'students/add?', JSON.stringify(student));
      }

      getStudents(){
        const url = `${this.urlConstant.SERVER_PORT}`;
      
        return this.dataService.getObjects(url + 'students/get?');
      }
    }