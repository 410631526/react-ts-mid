import { model, Schema, Document } from "mongoose";
import { Student } from "../../interfaces/Student"; // 匯入 Student 接口

// 定義學生文件類型
export type StudentDocument = Document & Student;

// 定義 Schema
export const studentsSchema = new Schema<Student>({
    userName: { type: String, required: true },
    sid: { type: String, required: true },
    name: { type: String, required: true },
    department: { type: String, required: true },
    grade: { type: String, required: true },
    class: { type: String, required: true },
    email: { type: String, required: true },
    absences: { type: Number, required: false },
});

// 定義 Model
export const studentsModel = model<StudentDocument>("students", studentsSchema);
