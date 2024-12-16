import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchData, updateStudent } from '../utils/fetch';

const Update: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ name: '', class: '', age: 0 });

  useEffect(() => {
    const getStudent = async () => {
      const data = await fetchData(`/students/${id}`);
      setStudent(data);
    };
    getStudent();
  }, [id]);

  const handleUpdate = async () => {
    if (student.name && student.class && student.age > 0) {
      await updateStudent(`/students/${id}`, student);
      navigate('/home');
    }
  };

  return (
    <div>
      <h2>更新學生資料</h2>
      <input
        type="text"
        placeholder="姓名"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="班級"
        value={student.class}
        onChange={(e) => setStudent({ ...student, class: e.target.value })}
      />
      <input
        type="number"
        placeholder="年齡"
        value={student.age}
        onChange={(e) => setStudent({ ...student, age: parseInt(e.target.value) })}
      />
      <button onClick={handleUpdate}>更新</button>
    </div>
  );
};

export default Update;
