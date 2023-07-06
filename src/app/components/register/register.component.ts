import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Classroom } from 'src/app/models/classroom';
import { AuthService } from 'src/app/services/auth.service';
import { ClassroomService } from 'src/app/services/classroom.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm:FormGroup;
  classrooms: Classroom[] ; 


  constructor(private authService:AuthService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private classroomService:ClassroomService,
    private registerService:RegisterService) { }

  ngOnInit(): void {
    this.createRegisterForm();
    this.getClassrooms();
  }

  getClassrooms() {
    this.classroomService.getClassrooms().subscribe(response=>{
      this.classrooms = response.data;              
    })
  }

  createRegisterForm(){
    this.registerForm=this.formBuilder.group({
      firstName:["",[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastName:["",[Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email:["",[Validators.required, Validators.minLength(10), Validators.maxLength(35),Validators.email]],
      password:["",[Validators.required, Validators.minLength(5), Validators.maxLength(20)]],      
      passwordConfirmation:["",[Validators.required, Validators.maxLength(20)]],
      numara:["",Validators.required],
      sinif:["",Validators.required],      
    },{validators:this.checkPasswordMatch("passwordConfirmation","password")} )
  }

  checkPasswordMatch(passwordConfirmation:string, password:string){
    return (formGroup:FormGroup)=>{
      const passwordControl = formGroup.controls[password];
      const passwordConfirmationControl = formGroup.controls[passwordConfirmation];

      if(passwordControl.value === passwordConfirmationControl.value){
        passwordConfirmationControl.setErrors(null);
      }
      else{
        passwordConfirmationControl.setErrors({mismatch:true});
      }

    }
    
  }

  register(){
    if(this.registerForm.valid){
      let registerModel =Object.assign({},this.registerForm.value)
      
      this.authService.register(registerModel).subscribe(response=>{   
        
        this.toastrService.success(response.message,"Kayıt başarılı, giriş yapabilirsiniz.")        
      }
      ,responseError=>{       
        this.toastrService.error(responseError.error)        
       
      }) 
    }
    else{
      this.toastrService.error("Formunuz eksik","Dikkat")         
    }
  }

}
