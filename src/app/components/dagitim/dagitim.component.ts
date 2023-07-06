import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dagitim } from 'src/app/models/dagitim';
import { Exam } from 'src/app/models/exam';
import { Salon } from 'src/app/models/salon';
import { Student } from 'src/app/models/student';
import { DagitimService } from 'src/app/services/dagitim.service';
import { ExamService } from 'src/app/services/exam.service';
import { SalonService } from 'src/app/services/salon.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-dagitim',
  templateUrl: './dagitim.component.html',
  styleUrls: ['./dagitim.component.css'],
})
export class DagitimComponent implements OnInit {
  [x: string]: any;

  title = 'Dağıtım';
  dagitims: Dagitim[];
  exams: Exam[];
  students: Student[];
  salons: Salon[];

  filterText = '';
  examFilter: number = 0;
  stdntFilter: number = 0;
  salonFilter: number = 0;

  dataLoaded = false;
  constructor(
    private dagitimService: DagitimService,
    private examService: ExamService,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private salonService: SalonService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['examId']) {

        if (params['stdntId']) {
          this.GetByExamIdStudentId(params['examId'], params['stdntId']);
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
      }
      
    });
  }

  getDagitims() {
    this.dagitimService.getDagitims().subscribe((response) => {
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
    this.dagitimService.GetByExamId(examId).subscribe((response) => {
      this.dagitims = response.data;
      this.dataLoaded = true;
    });
  }

  GetByStudentId(stdntId: number) {
    this.dagitimService.GetByStudentId(stdntId).subscribe((response) => {
      this.dagitims = response.data;
      this.dataLoaded = true;
    });
  }

  GetByExamIdStudentId(examId: number, stdntId: number) {
    this.dagitimService.GetByExamIdStudentId(examId, stdntId).subscribe((response) => {
      this.dagitims = response.data;
      this.dataLoaded = true;
    });
  }

  GetByExamIdSalonId(examId: number, salonId: number) {
    this.dagitimService.GetByExamIdSalonId(examId, salonId).subscribe((response) => {
      this.dagitims = response.data;
      this.dataLoaded = true;
    });
  }

}


