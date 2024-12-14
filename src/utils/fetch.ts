export const fetchData = async (url: string) => {
    const response = await fetch(url);
    return response.json();
  };
  
  export const createStudent = async (url: string, student: any) => {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });
  };
  
  export const updateStudent = async (url: string, student: any) => {
    await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });
  };
  
  export const deleteStudent = async (url: string) => {
    await fetch(url, { method: 'DELETE' });
  };
  // src/utils/fetch.ts
export const asyncGet = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  };
  