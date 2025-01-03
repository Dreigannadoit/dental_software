import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Calendar,
  Chart,
  Dashboard,
  Dental_Codes,
  Distribution,
  Eligibility,
  Grade,
  Login,
  NoPage,
  Patients,
  Procedure_Codes,
  Program,
  Reports,
  Schools,
  Users,
} from './pages';
import MasterController from './components/MasterController';
import './css/app.css'

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter basename="/dental_software">
        {/* MasterController component outside Routes for global navigation */}
        <MasterController />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />

          {/* Protected Routes */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="patients" element={<Patients />} />
          <Route path="chart" element={<Chart />} />
          <Route path="eligibility" element={<Eligibility />} />
          <Route path="distribution" element={<Distribution />} />
          <Route path="reports" element={<Reports />} />
          <Route path="schools" element={<Schools />} />
          <Route path="grade" element={<Grade />} />
          <Route path="program" element={<Program />} />
          <Route path="dental_codes" element={<Dental_Codes />} />
          <Route path="procedure_codes" element={<Procedure_Codes />} />
          <Route path="users" element={<Users />} />

          {/* Fallback Route */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
