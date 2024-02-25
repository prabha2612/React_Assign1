import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../styles.module.css';

//This functions helps the user to edit the added employee.

const EditEmployee = ({ employees, onUpdateEmployee }) => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    const employeeToEdit = employees[id];
    if (employeeToEdit) {
      setEmployee(employeeToEdit);
    }
  }, [id, employees]);

  // Check if employee is not yet loaded or undefined
  if (!employee || Object.keys(employee).length === 0) {
    return <div>no employee</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateEmployee(id, employee);
    // Shows alert after updating employee
    alert('Employee details updated successfully!');
    // Navigate to the list page or perform any necessary action
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor="fullName" className={styles.label}>Full Name:</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName"
            value={employee.fullName || ''} 
            onChange={handleChange} 
            required 
            className={styles.input} 
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="department" className={styles.label}>Department:</label>
          <input 
            type="text" 
            id="department" 
            name="department"
            value={employee.department || ''} 
            onChange={handleChange} 
            required 
            className={styles.input} 
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="experience" className={styles.label}>Experience (in years):</label>
          <input 
            type="number" 
            id="experience" 
            name="experience"
            value={employee.experience || ''} 
            onChange={handleChange} 
            required 
            className={styles.input} 
          />
        </div>
        <button type="submit" className={styles.button}>Submit</button>
        <Link to="/list" className={styles.link}>List</Link>
      </form>
    </div>
  );
}

export default EditEmployee;
