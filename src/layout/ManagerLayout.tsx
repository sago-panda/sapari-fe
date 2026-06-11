// import React from 'react';
import { Outlet } from 'react-router-dom';
import * as styles from './managerLayout.css';

export default function ManagerLayout() {
  return (
    <div className={styles.managerLayout}>
      <Outlet />
    </div>
  );
}
