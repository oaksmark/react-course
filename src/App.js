import React, { useState } from 'react';
import styles from './App.module.css';

const App = () => {

  return (

    <form >
      <div className={`${styles['form-control']}`}>
        <label>User Name</label>
        <input type="text" />
        <label>Age (Years)</label>
        <input type="text" />
      <button type='submit'>Add User</button>
      </div>
    </form>

  );
};

export default App;
