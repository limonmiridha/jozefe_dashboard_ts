import React from 'react';
import InfoCards from '@/components/InfoCards';
import { dashboardCards } from '@/data/CardsData';
import Charts from '@/components/Charts/Charts';
import Accounting from '@/interface/dashboard/Accounting';
import GlobalDataTable from '@/components/GlobalDataTable';
import { memberPendingColumn, memberPendingData } from '@/data/TableData';

const Dashboard = () => {
  return (
    <div>
      <InfoCards cards={dashboardCards} propertySelection={true} />
      <Charts />
      <Accounting />
      {/* <DashboardDataTable /> */}
      <div className="bg-white rounded-lg my-4">
        <GlobalDataTable
          data={memberPendingData}
          column={memberPendingColumn}
          tableHeader={false}
        />
      </div>
    </div>
  );
};

export default Dashboard;
