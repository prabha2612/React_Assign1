import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';

//Function to add employee
const AddEmployee = ({ onEmployeeAdd }) => {
  const [fullName, setFullName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [department, setDepartment] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      fullName,
      birthdate,
      department,
      experience
    };
    onEmployeeAdd(newEmployee);
    // Clears the fields after submission
    setFullName('');
    setBirthdate('');
    setDepartment('');
    setExperience('');
    // Show's alert that employee is added
    alert('Employee has been added');
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        {/* Form for taking inputs */}
        <div className={styles.inputWrapper}>
          <label htmlFor="fullName" className={styles.label}>Full Name:</label>
          <input 
            type="text" 
            id="fullName" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value.replace(/[^A-Za-z\s]/g, ''))} 
            required 
            className={styles.input} 
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="birthdate" className={styles.label}>Birthdate:</label>
          <input 
            type="date" 
            id="birthdate" 
            value={birthdate} 
            onChange={(e) => setBirthdate(e.target.value)} 
            required 
            className={styles.input} 
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="department" className={styles.label}>Department:</label>
          <input 
            type="text" 
            id="department" 
            value={department} 
            onChange={(e) => setDepartment(e.target.value)} 
            required 
            className={styles.input} 
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="experience" className={styles.label}>Experience (in years):</label>
          <input 
            type="number" 
            id="experience" 
            value={experience} 
            onChange={(e) => setExperience(e.target.value.replace(/\D/, ''))} 
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

export default AddEmployee;
