import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';

//Dashboard is displayed with add and list buttons
const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h2>Welcome to the Dashboard</h2>
      <Link to="/add">
        <button className={styles.button}>Add Employee</button>
      </Link>
      <Link to="/list">
        <button className={styles.button}>List Employees</button>
      </Link>
    </div>
  );
}

export default Dashboard;
