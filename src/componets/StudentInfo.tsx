import React from 'react';

interface StudentInfoProps {
  student: {
    studentID: number;
    name: string;
    class: string;
    age: number;
  };
  onDelete: (id: number) => void;
}

const StudentInfo: React.FC<StudentInfoProps> = ({ student, onDelete }) => {
  return (
    <div className="student">
      <span>{student.name}</span>
      <span>{student.class}</span>
      <span>{student.age}</span>
      <button onClick={() => onDelete(student.studentID)}>刪除</button>
    </div>
  );
};

export default StudentInfo;
