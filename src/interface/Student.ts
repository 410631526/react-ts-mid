// src/interface/Student.ts
export interface Student {
    userName: string;
    sid: string;
    name: string;
    department: string;
    grade: string;
    class: string;
    Email: string;
    absences?: number; // 可選屬性，因為後端設定為非必填
  }
  