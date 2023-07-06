import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Classroom } from 'src/app/models/classroom';
import { Dagitim } from 'src/app/models/dagitim';
import { DagitimDto } from 'src/app/models/dagitimDto';
import { Exam } from 'src/app/models/exam';
import { Salon } from 'src/app/models/salon';
import { Student } from 'src/app/models/student';
import { ClassroomService } from 'src/app/services/classroom.service';
import { DagitimDtoService } from 'src/app/services/dagitim-dto.service';
import { DagitimService } from 'src/app/services/dagitim.service';
import { ExamService } from 'src/app/services/exam.service';
import { SalonService } from 'src/app/services/salon.service';
import { StudentService } from 'src/app/services/student.service';
import { ImageUrl } from 'src/app/models/urls';

@Component({
  selector: 'app-dagitim-dto',
  templateUrl: './dagitim-dto.component.html',
  styleUrls: ['./dagitim-dto.component.css']
})
export class DagitimDtoComponent  implements OnInit {
  [x: string]: any;

  title = 'Dağıtım Dto';
  dagitims: DagitimDto[];
  exams: Exam[];
  students: Student[];
  salons: Salon[];
  classrooms: Classroom[];
  selectedYer: string;
  //imageUrl = "https://localhost:7030/uploads/images/"
  imageUrl = ImageUrl;
  
  

  filterText = '';
  examFilter: number = 0;
  stdntFilter: number = 0;
  salonFilter: number = 0;
  classFilter: number = 0;
  dataLoaded = false;
  constructor(
    private dagitimDtoService: DagitimDtoService,
    private examService: ExamService,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private classroomService: ClassroomService,
    private salonService: SalonService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['examId']) {

        if (params['classId']) {
          this.GetByExamIdClassId(params['examId'], params['classId']);
        }
        else if (params['salonId']) {
          this.GetByExamIdSalonId(params['examId'], params['salonId']);
        }
        else {          
          this.GetByExamId(params['examId']);
          
        }
      } else if (params['stdntId']) {
        this.GetByStudentId(params['stdntId']);        
      } else {
        this.getDagitims();
        this.getExams();
        this.getStudents();
        this.getSalons();        
        this.getClassrooms();        
      }
      
    });
  }
  getStudentImage(student:number){
   
    let path = this.imageUrl + student+".jpg";
    return path;
  }
  getDagitims() {
    this.dagitimDtoService.getDagitims().subscribe((response) => {
      this.dagitims = response.data;
      this.dataLoaded = true;
    });
  }

  getExams() {
    this.examService.getExams().subscribe((response) => {
      this.exams = response.data;
      this.dataLoaded = true;
    });
  }

  getClassrooms() {
    this.classroomService.getClassrooms().subscribe((response) => {
      this.classrooms = response.data;
      this.dataLoaded = true;
    });
  }

  getStudents() {
    this.studentService.getStudents().subscribe((response) => {
      this.students = response.data;
      this.dataLoaded = true;
    });
  }

  getSalons() {
    this.salonService.getSalons().subscribe((response) => {
      this.salons = response.data;
      this.dataLoaded = true;
    });
  }

  GetByExamId(examId: number) {    
    this.dagitimDtoService.GetByExamId(examId).subscribe((response) => {
      this.dagitims = response.data;
      this.dataLoaded = true;
    });
  }

  GetByStudentId(stdntId: number) {
    this.dagitimDtoService.GetByStudentId(stdntId).subscribe((response) => {
      this.dagitims = response.data;
      this.dataLoaded = true;
    });
  }


  GetByExamIdSalonId(examId: number, salonId: number) {
    this.dagitimDtoService.GetByExamIdSalonId(examId, salonId).subscribe((response) => {
      this.dagitims = response.data.sort((a, b) => a.yer -b.yer);
      this.classFilter = 0;
      console.log(this.dagitims);
      console.log(examId);
      console.log(salonId);
      this.dataLoaded = true;
    });
  }

  GetByExamIdClassId(examId: number, classId: number) {
    this.dagitimDtoService.GetByExamIdClassId(examId, classId).subscribe((response) => {
      this.dagitims = response.data;
      this.salonFilter = 0;
      console.log(this.dagitims);
      console.log(examId);
      console.log(classId);
      this.dataLoaded = true;
    });
  }

}


