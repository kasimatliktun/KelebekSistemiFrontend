import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Exam } from 'src/app/models/exam';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent implements OnInit {
  [x: string]: any;  
  constructor(private examService:ExamService, private toastrService:ToastrService) {}
  title = 'Sınavlar';
  exams: Exam[] ; 
  currentExam: Exam;
  dataLoaded = false;   
  
  ngOnInit(): void {
    this.getExams();
  }
  getExams() {  
    this.examService.getExams().subscribe(response=>{
      this.exams = response.data;  
      this.dataLoaded = true;    
    })
  }

  
  setCurrentExam(Exam:Exam){
    this.currentExam = Exam;
  }
  getCurrentExamClass(Exam:Exam){
    if(Exam ==this.currentExam){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllExamClass(){
    if(!this.currentExam){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }


  editExam(examid: number) {
    // Düzenleme işlemi için modal veya yeni sayfa açabilirsiniz
  }

  deleteExam(examid: number) {
    if (confirm("Bu öğeyi silmek istediğinize emin misiniz?")) {
      // Kullanıcı 'Evet' yanıtını verdiğinde burada silme işlemi yapılabilir.
      this.examService.deleteExam(examid).subscribe((response) => {
        this.exams = this.exams.filter((u) => u.id !== examid);
        this.toastrService.success(response.message,"Başarılı")
      });
    }
  }

}
