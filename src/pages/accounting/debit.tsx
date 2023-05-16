import GlobalDataTable from '@/components/GlobalDataTable';
import { InnerHeader, TitleHeader } from '@/components/Headers';
import { incidentColumn, incidentData } from '@/data/TableData';
import React from 'react';

const debit = () => {
  return (
    <div>
      <TitleHeader
        pageIcon="/images/accounting/suppliers.svg"
        headerText='In this page you can see all transaction "debit" Invoice you have create for you property'
      />
      <GlobalDataTable
        data={incidentData}
        column={incidentColumn}
        tableTitle="Contract Member"
        titleImg="/images/incidents/incidentsBg.svg"
        tableHeader={true}
      />
    </div>
  );
};

export default debit;
