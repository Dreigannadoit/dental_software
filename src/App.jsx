import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Activity,
  Calendar,
  Case_Management,
  Chart,
  Dashboard,
  Dental_Codes,
  Distribution,
  Eligibility,
  End_Of_Year_Report,
  Grade,
  Import,
  Login,
  NoPage,
  Patients,
  Procedure_Codes,
  Program,
  Reports,
  Schools,
  State_Reports_Grade,
  Statistics_Reports,
  User_Profile,
  Users,
} from './pages';
import MasterController from './components/MasterController';
import ProtectedLayout from './components/ProtectedLayout';
import './css/app.css';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter basename="/dental_software/">
        <MasterController />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<ProtectedLayout />}>
            <Route path="profile" element={<User_Profile />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="patients" element={<Patients />} />
            <Route path="chart" element={<Chart />} />
            <Route path="eligibility" element={<Eligibility />} />
            <Route path="distribution" element={<Distribution />} />
            <Route path="reports" element={<Reports />} />
            <Route path="reports/case_management" element={<Case_Management />} />
            <Route path="reports/activity" element={<Activity />} />
            <Route path="reports/statistics_reports" element={<Statistics_Reports />} />
            <Route path="reports/state_reports_grade" element={<State_Reports_Grade />} />
            <Route path="reports/end_of_year" element={<End_Of_Year_Report />} />
            <Route path="schools" element={<Schools />} />
            <Route path="grade" element={<Grade />} />
            <Route path="program" element={<Program />} />
            <Route path="dental_codes" element={<Dental_Codes />} />
            <Route path="procedure_codes" element={<Procedure_Codes />} />
            <Route path="users" element={<Users />} />
            <Route path="import" element={<Import />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
