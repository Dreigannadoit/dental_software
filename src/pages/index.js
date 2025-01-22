import React, { lazy, Suspense } from 'react';

// Function to create lazy components with named exports
const createLazyComponent = (importFn) => lazy( () => importFn().then(module => ({default: module[Object.keys(module)[0]]})));

const Import = createLazyComponent(() => import("./Import"));
const User_Profile = createLazyComponent(() => import("./User_Profile"));
const Calendar = createLazyComponent(() => import("./Calendar/Calendar"));
const Chart = createLazyComponent(() => import("./Chart/Chart"));
const Dashboard = createLazyComponent(() => import("./Dashboard/Dashboard"));
const Dental_Codes = createLazyComponent(() => import("./Dental_Codes/Dental_Codes"));
const Distribution = createLazyComponent(() => import("./Distribution/Distribution"));
const Eligibility = createLazyComponent(() => import("./Eligibility/Eligibility"));
const Grade = createLazyComponent(() => import("./Grade/Grade"));
const NoPage = createLazyComponent(() => import("./NoPage/NoPage"));
const Patients = createLazyComponent(() => import("./Patients/Patients"));
const Procedure_Codes = createLazyComponent(() => import("./Procedure_Codes/Procedure_Codes"));
const Program = createLazyComponent(() => import("./Program/Program"));
const Reports = createLazyComponent(() => import("./Reports/Reports"));
const Case_Management = createLazyComponent(() => import("./Reports/Case_Management"));
const Statistics_Reports = createLazyComponent(() => import("./Reports/Statistics_Reports"));
const State_Reports_Grade = createLazyComponent(() => import("./Reports/State_Reports_Grade"));
const End_Of_Year_Report = createLazyComponent(() => import("./Reports/End_Of_Year_Report"));
const Activity = createLazyComponent(() => import("./Reports/Activity"));
const Schools = createLazyComponent(() => import("./Schools/Schools"));
const Users = createLazyComponent(() => import("./Users/Users"));
const Login = createLazyComponent(() => import("./Login"));
const Layout = createLazyComponent(() => import("./Layout"));

export {
   Import,
   User_Profile,
   Calendar,
   Chart,
   Dashboard,
   Dental_Codes,
   Distribution,
   Eligibility,
   Grade,
   NoPage,
   Patients,
   Procedure_Codes,
   Program,
   Reports,
   Case_Management,
   Statistics_Reports,
   State_Reports_Grade,
   End_Of_Year_Report,
   Activity,
   Schools,
   Users,
   Login,
   Layout
}