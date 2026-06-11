import { Routes, Route } from 'react-router-dom';
import { BuyerLayout, SellerLayout, ManagerLayout } from '../layout';
import {
  SellerLoginPage,
  BuyerLoginPage,
  MainPage,
  SearchPage,
  ManagerLoginPage,
} from '../pages';

export function Router() {
  return (
    <Routes>
      <Route element={<BuyerLayout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<BuyerLoginPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Route>
      <Route element={<SellerLayout />}>
        <Route path='/seller/login' element={<SellerLoginPage />} />
      </Route>
      <Route element={<ManagerLayout />}>
        <Route path='/manager/login' element={<ManagerLoginPage />} />
      </Route>
    </Routes>
  );
}
