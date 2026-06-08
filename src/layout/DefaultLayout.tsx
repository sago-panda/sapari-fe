import React from 'react';
import { Outlet } from 'react-router';
import * as styles from './defaultLayout.css';
import { Btn } from '../components/atoms';

export default function DefaultLayout() {
  return (
    <div className={styles.defaultLayout}>
      <Outlet />
    </div>
  );
}
