import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exam-add',
  templateUrl: './exam-add.component.html',
  styleUrls: ['./exam-add.component.css']
})
export class ExamAddComponent implements OnInit {
  examAddForm : FormGroup;  
  constructor(private formBuilder:FormBuilder, 
    private examService:ExamService, private toastrService:ToastrService) { }

    ngOnInit(): void {
      this.createExamAddForm();
      
    }
  
    createExamAddForm(){
       this.examAddForm = this.formBuilder.group({
         name:["",Validators.required],
         day: ["PAZARTESİ",Validators.required],
         dersSaati:["", Validators.required],         
         dates:["",Validators.required],
         times:["",Validators.required],
          declaration:[""],
       })       
    }

    addExam(){
      if(this.examAddForm.valid){
        let examModel = Object.assign({},this.examAddForm.value)        
        examModel.dates = `${examModel.dates}T${examModel.times}`;        
        this.examService.addExam(examModel).subscribe(response=>{
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
