import React from 'react';
import { InnerHeader, TitleHeader } from '@/components/Headers';
import GlobalDataTable from '@/components/GlobalDataTable';
import { incidentColumn, incidentData } from '@/data/TableData';

const contracts = () => {
  return (
    <div>
      <TitleHeader
        pageIcon="/images/accounting/suppliers.svg"
        headerText="In this page you can manage all you contracts"
      />
      <InnerHeader>Contracts Listing</InnerHeader>
      <GlobalDataTable
        data={incidentData}
        column={incidentColumn}
        tableTitle="Contract Member"
        titleImg="/images/incidents/incidentsBg.svg"
        tableHeader={true}
      />
      <GlobalDataTable
        data={incidentData}
        column={incidentColumn}
        tableTitle="Contract Suppliers"
        titleImg="/images/incidents/incidentsBg.svg"
        tableHeader={true}
      />
    </div>
  );
};

export default contracts;
