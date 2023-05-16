import React from 'react';
import GlobalDataTable from '@/components/GlobalDataTable';
import { TitleHeader } from '@/components/Headers';
import { incidentColumn, incidentData } from '@/data/TableData';

const cashflow = () => {
  return (
    <div>
      <TitleHeader
        pageIcon="/images/accounting/suppliers.svg"
        headerText="In this page you can control your treasury and your cashflow for make a
        payment for members or add some funds on treasury or cashflow."
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

export default cashflow;
