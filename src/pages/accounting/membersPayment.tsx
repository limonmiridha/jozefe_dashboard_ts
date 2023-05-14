import React, { useContext } from 'react';
import GlobalDataTable from '@/components/GlobalDataTable';
import { membersPaymentData, membersPaymentColumn } from '@/data/TableData';
import Image from 'next/image';
import { TitleHeader } from '@/components/Headers';

const membersPayment = () => {
  return (
    <>
      <TitleHeader
        pageIcon="/images/accounting/coin-money.svg"
        headerText="In this page you can confirm the payment of your members or tenants."
      />

      <div className="bg-white rounded-lg my-4">
        <GlobalDataTable
          data={membersPaymentData}
          column={membersPaymentColumn}
          tableHeader={false}
        />
      </div>
    </>
  );
};

export default membersPayment;
