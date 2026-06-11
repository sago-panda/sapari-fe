// import React from 'react';
import { Outlet } from 'react-router';
import * as styles from './buyerLayout.css';
// import { Btn } from '../components/atoms';

export default function BuyerLayout() {
  return (
    <div className={styles.buyerLayout}>
      <Outlet />
    </div>
  );
}
