import Card from '@/components/GlobalCard';
import GlobalDataTable from '@/components/GlobalDataTable';
import { TitleHeader } from '@/components/Headers';
import InfoCards from '@/components/InfoCards';
import { dashboardCards, incidentsCards } from '@/data/CardsData';
import { membersPaymentColumn, membersPaymentData } from '@/data/TableData';
import React from 'react';

const fundraising = () => {
  return (
    <div>
      <TitleHeader
        pageIcon="/images/accounting/suppliers.svg"
        headerText='In this page you can create a goal "Fundraising" amount for you project for your property.  Example : "need to have 
  big renovation for the rooftop'
      />
      <GlobalDataTable
        data={membersPaymentData}
        column={membersPaymentColumn}
        tableHeader={false}
      />
      <InfoCards cards={dashboardCards} />

      <div className="relative my-3 mb-16">
        <span className="absolute top-2 pl-4 text-gray-600">Description</span>
        <textarea
          className="w-full h-32 p-4 pt-8 rounded"
          placeholder="Type description here..."
        />
      </div>
    </div>
  );
};

export default fundraising;
