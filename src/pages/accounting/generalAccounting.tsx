import Button from '@/components/Button';
import Card from '@/components/GlobalCard';
import GlobalDataTable from '@/components/GlobalDataTable';
import { InnerHeader, TitleHeader } from '@/components/Headers';
import { incidentColumn, incidentData } from '@/data/TableData';
import Image from 'next/image';
import React from 'react';

const generalAccounting = () => {
  return (
    <div>
      <TitleHeader
        pageIcon="/images/accounting/suppliers.svg"
        headerText="In this place you have a general show of you common and private accounting view"
      />
      <InnerHeader>Common Property Charge Accounting</InnerHeader>
      <div className="grid lg:grid-cols-2 gap-4">
        <GlobalDataTable
          data={incidentData}
          column={incidentColumn}
          tableTitle="Debit"
          titleImg="/images/incidents/incidentsBg.svg"
          tableHeader={true}
        />
        <GlobalDataTable
          data={incidentData}
          column={incidentColumn}
          tableTitle="Debit"
          titleImg="/images/incidents/incidentsBg.svg"
          tableHeader={true}
        />
      </div>
      <InnerHeader>Private Member Accounting</InnerHeader>
      <div className="grid lg:grid-cols-2 gap-4">
        <GlobalDataTable
          data={incidentData}
          column={incidentColumn}
          tableTitle="Debit"
          titleImg="/images/incidents/incidentsBg.svg"
          tableHeader={true}
        />
        <GlobalDataTable
          data={incidentData}
          column={incidentColumn}
          tableTitle="Debit"
          titleImg="/images/incidents/incidentsBg.svg"
          tableHeader={true}
        />
      </div>
      <Card cls="w-1/2 mx-auto p-4 mb-16">
        <Button>Total</Button>
        <h3 className="text-xl font-bold">Invoice for Member 5</h3>
        <div className="justify-betweens">
          <h3>Private Total</h3>
          <p>500$</p>
        </div>
        <div className="justify-betweens">
          <h3>Private Total</h3>
          <p>500$</p>
        </div>
        <div className="justify-betweens">
          <h3>Private Total</h3>
          <p>500$</p>
        </div>
        <hr className="mb-3 border-dashed" />

        <Image
          src="/images/accounting/accountingBar.svg"
          width={20}
          height={20}
          className="w-full"
          alt=""
        />
      </Card>
    </div>
  );
};

export default generalAccounting;
