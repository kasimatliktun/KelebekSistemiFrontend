import { StudentImage } from './studentImage';

export interface StudentDetailDTO {
  studentId: number;
  stdntNo: number;
  studentName: string;
  classId: number;
  className: string;
  examId: number;
  examName: string;
  imagePath: StudentImage[];    
  salonId: number;  
  salonName: string;
  yer: number;    
}
