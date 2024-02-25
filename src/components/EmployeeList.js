// EmployeeList.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';

//This functions displays the list of employees and gives options to either edit or delete the employee
const EmployeeList = ({ employees, onDeleteEmployee }) => {
  const handleDelete = (index) => {
    onDeleteEmployee(index);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Employee List</h2>
      <Link to="/" className={styles.button}>Back to Dashboard</Link>
      <ul className={styles.list}>
        {employees.map((employee, index) => (
          <li key={index} className={styles.listItem}>
            <strong>Full Name:</strong> {employee.fullName} <br />
            <strong>Department:</strong> {employee.department} <br />
            <strong>Experience:</strong> {employee.experience} years <br />
            <Link to={`/edit/${index}`} className={styles.editButton}>Edit</Link>
            <button onClick={() => handleDelete(index)} className={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
