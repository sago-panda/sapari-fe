import { Routes, Route } from 'react-router-dom';
import {
  BuyerLayout,
  SellerLayout,
  SellerMenuLayout,
  ManagerLayout,
} from '../layout';
import {
  BuyerLoginPage,
  MainPage,
  SearchPage,
  SellerLoginPage,
  SellerSigninPage,
  SingleProductListingPage,
  BulkProductListingPage,
  ModifyProduct,
  ManagerLoginPage,
} from '../pages';

export function Router() {
  return (
    <Routes>
      {/* =========== 구매자 =========== */}
      <Route element={<BuyerLayout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<BuyerLoginPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Route>
      {/* =========== 판매자 =========== */}
      <Route path='seller' element={<SellerLayout />}>
        <Route path='login' element={<SellerLoginPage />} />
        <Route path='signin' element={<SellerSigninPage />} />
        <Route path='product' element={<SellerMenuLayout />}>
          <Route path='single-listing' element={<SingleProductListingPage />} />
          <Route path='bulk-listing' element={<BulkProductListingPage />} />
          <Route path='modify' element={<ModifyProduct />} />
        </Route>
      </Route>
      {/* =========== 관리자 =========== */}
      <Route element={<ManagerLayout />}>
        <Route path='/manager/login' element={<ManagerLoginPage />} />
      </Route>
    </Routes>
  );
}
