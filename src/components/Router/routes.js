import { Buy, Sell, Product, Report, Supplier, Service, Home } from '../../pages';

const publicRoutes = [
  { path: '/', component: Home, name: "Trang chủ" },
  { path: '/sell/*', component: Sell, name: "Phiếu bán" },
  { path: '/buy/*', component: Buy, name: "Phiếu mua" },
  { path: '/service/*', component: Service, name: "Phiếu dịch vụ" },
  { path: '/product/*', component: Product, name: "Sản phẩm" },
  { path: '/supplier', component: Supplier, name: "Nhà cung cấp" },
  { path: '/report/*', component: Report, name: "Báo cáo" },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };