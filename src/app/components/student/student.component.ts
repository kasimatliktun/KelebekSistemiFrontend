import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/models/student';
import { StudentImage } from 'src/app/models/studentImage';
import { CartService } from 'src/app/services/cart.service';
import { StudentImageService } from 'src/app/services/student-image.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  title = 'Öğrenci Listesi';
  students: Student[] = [];
  dataLoaded = false;
  filterText = '';
  imageUrl = "https://butterstorage.blob.core.windows.net/serbest/uploads/images/"
  studenImages: StudentImage[];

  constructor(
    private studentService: StudentService,
    private studentImageService:StudentImageService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService:CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getByClass(params['id']);
      } else {
        this.getStudents();
      }
    });
  }
  getStudents() {
    this.studentService.getStudents().subscribe((response) => {
      this.students = response.data;
      this.dataLoaded = true;
    });
  }

  getByClass(id: number) {
    this.studentService.getByClass(id).subscribe((response) => {
      this.students = response.data;
      this.dataLoaded = true;
    });
  }

  addToCart(student: Student) {
    if (student.id === 1) {// 1 deneme amaçlı
      this.toastrService.error('Hata', 'Bu öğrenci sepete eklenemez');
    } else {
      this.toastrService.success('Sepete eklendi', student.name);
      this.cartService.addToCart(student);
    }
  }

  getStudentImage(student:Student){
   
      let path = this.imageUrl + student.id+".jpg";
      return path;
    }
  
}
