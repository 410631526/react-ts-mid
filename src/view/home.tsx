import React, { useEffect, useState } from 'react';
import { fetchData, deleteStudent } from '../utils/fetch';
import StudentInfo from '../componets/StudentInfo';

const Home: React.FC = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const data = await fetchData('/students');
      setStudents(data);
    };
    getStudents();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteStudent(`/students/${id}`);
    setStudents(students.filter((student: any) => student.studentID !== id));
  };

  return (
    <div>
      <h2>學生列表</h2>
      {students.map((student: any) => (
        <StudentInfo key={student.studentID} student={student} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Home;
