import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/Home';
import CustomerPage from './pages/Customers';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import CustomerDetailPage, { customerDetailLoader } from './pages/CustomerDetail';

import axios from './api/axios';
import Login from './pages/Login';
import RequireAuth from './components/RequireAuth';
import ActivityPage from './pages/Activity';
import OrdersPage from './pages/Orders';
import CallReportPage from './pages/CallReport';
import NewCustomersPage from './pages/NewCustomers';
import CreateCustomer from './pages/CreateCustomer';
import PlannerPage from './pages/Planner';
import ActivityDetailPage from './pages/ActivityDetail';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '', 
        element: <RequireAuth />,
        children: [
          {index: true, element: <HomePage /> }, //"index: true" is the alternative to "path: '/'"
          {path: 'customers', element: <CustomerPage /> },
          {path: 'customers/:customerId', element: <CustomerDetailPage />, loader: customerDetailLoader },
          {path: 'newCustomers', element: <NewCustomersPage /> },
          {path: 'newCustomers/new', element: <CreateCustomer /> },
          {path: 'activity', element: <ActivityPage /> },
          {path: 'activity/plan', element: <PlannerPage /> },
          {path: 'orders', element: <OrdersPage /> },
          {path: 'activity/:transNo', element: <ActivityDetailPage /> },
          {path: 'activity/callReport/:customerId?', element: <CallReportPage /> },
        ]
      }
    ],
    errorElement: <ErrorPage />
  },
])

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App
