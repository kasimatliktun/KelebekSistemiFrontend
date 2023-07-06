import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { Classroom } from 'src/app/models/classroom';
import { ClassroomService } from 'src/app/services/classroom.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
  providers:[ClassroomService]
})
export class StudentAddComponent implements OnInit {
  studentAddForm : FormGroup;
  classrooms: Classroom[] ; 
  constructor(private formBuilder:FormBuilder, 
    private studentService:StudentService, private classroomService:ClassroomService,private toastrService:ToastrService) { }

    ngOnInit(): void {
      this.createStudentAddForm();
      this.getClassrooms();
    }
  
    createStudentAddForm(){
       this.studentAddForm = this.formBuilder.group({
         name:["",Validators.required],
         gender: ["",Validators.required],
         id:["", Validators.required],
         classId:["",Validators.required]
       })
    }

    getClassrooms() {
      this.classroomService.getClassrooms().subscribe(response=>{
        this.classrooms = response.data;              
      })
    }
    add(){
      if(this.studentAddForm.valid){
        let studentModel = Object.assign({},this.studentAddForm.value)
        this.studentService.add(studentModel).subscribe(response=>{
          this.toastrService.success(response.message,"Başarılı")
        },responseError=>{                
          if(responseError.error.Errors.length>0){
            for (let i = 0; i <responseError.error.Errors.length; i++) {
              this.toastrService.error(responseError.error.Errors[i].ErrorMessage
                ,"Doğrulama hatası")
            }       
          } 
        })
        
      }else{
        this.toastrService.error("Formunuz eksik","Dikkat")
      }
      
    }
  
}
