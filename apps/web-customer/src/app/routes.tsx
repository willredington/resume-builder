import { Link, Route, Routes } from 'react-router-dom';
import { Dashboard } from '@resume-builder/frontend/customer/feat-dashboard';

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        }
      />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
