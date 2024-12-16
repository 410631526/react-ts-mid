import React, { useState } from 'react';
import { createStudent } from '../utils/fetch';

const Insert: React.FC = () => {
  const [newStudent, setNewStudent] = useState({ name: '', class: '', age: 0 });

  const handleCreate = async () => {
    if (newStudent.name && newStudent.class && newStudent.age > 0) {
      await createStudent('/students', newStudent);
      setNewStudent({ name: '', class: '', age: 0 });
    }
  };

  return (
    <div>
      <h2>新增學生</h2>
      <input
        type="text"
        placeholder="姓名"
        value={newStudent.name}
        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="班級"
        value={newStudent.class}
        onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
      />
      <input
        type="number"
        placeholder="年齡"
        value={newStudent.age}
        onChange={(e) => setNewStudent({ ...newStudent, age: parseInt(e.target.value) })}
      />
      <button onClick={handleCreate}>新增</button>
    </div>
  );
};

export default Insert;
