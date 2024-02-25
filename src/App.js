// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Dashboard from './components/Dashboard';
import styles from './styles.module.css';

function App() {
  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  }

  const handleUpdateEmployee = (id, updatedEmployee) => {
    const updatedEmployees = [...employees];
    updatedEmployees[id] = updatedEmployee;
    setEmployees(updatedEmployees);
  }

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  }
  return (
    <Router>
      <div className={styles.body}>
      <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/list" element={<EmployeeList employees={employees} />} /> */}
        <Route path="/list" element={<EmployeeList employees={employees} onDeleteEmployee={handleDeleteEmployee} />} />
        <Route path="/add" element={<AddEmployee onEmployeeAdd={handleAddEmployee} />} />
        <Route 
          path="/edit/:id" 
          element={<EditEmployee employees={employees} onUpdateEmployee={handleUpdateEmployee} />} 
        />
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
