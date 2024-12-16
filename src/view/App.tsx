import React, { useEffect, useState } from 'react';
import { asyncGet } from '../utils/fetch';
import { Student } from '../interface/Student';

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await asyncGet('/students');
      setStudents(data);
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>學生列表</h1>
      {students.map((student) => (
        <div key={student.sid}>
          <p>用戶名: {student.userName}</p>
          <p>學號: {student.sid}</p>
          <p>姓名: {student.name}</p>
          <p>系所: {student.department}</p>
          <p>年級: {student.grade}</p>
          <p>班級: {student.class}</p>
          <p>電子郵件: {student.Email}</p>
          <p>缺勤次數: {student.absences || 0}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
