import React, { useState, useEffect } from 'react';
import ExecutiveDashboard from '../components/Dashboard/ExecutiveDashboard';
import financeService from '../services/financeService';
import hrService from '../services/hrService';
import projectService from '../services/projectService';

export const Dashboard: React.FC = () => {
  const [accountsCount, setAccountsCount] = useState(0);
  const [employeesCount, setEmployeesCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const accs = await financeService.getAccounts();
        setAccountsCount(accs.length);
      } catch (e) {
        console.error('Accounts count error:', e);
      }
      try {
        const emps = await hrService.getEmployees();
        setEmployeesCount(emps.length);
      } catch (e) {
        console.error('Employees count error:', e);
      }
      try {
        const projs = await projectService.getProjects();
        setProjectsCount(projs.length);
      } catch (e) {
        console.error('Projects count error:', e);
      }
    };

    loadStats();
  }, []);

  return (
    <ExecutiveDashboard 
      accountsCount={accountsCount}
      employeesCount={employeesCount}
      projectsCount={projectsCount}
    />
  );
};

export default Dashboard;
