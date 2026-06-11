// import React from 'react';
import { Outlet } from 'react-router-dom';
import * as styles from './sellerLayout.css';

export default function SellerLayout() {
  return (
    <div className={styles.sellerLayout}>
      <Outlet />
    </div>
  );
}
