import SelectInput from '@/components/SelectInput';
import Image from 'next/image';
import React, { useContext } from 'react';
import FileUploader from '@/components/FileUploader';
import { membersColumn, membersData } from '@/data/TableData';
import GlobalDataTable from '@/components/GlobalDataTable';
import Input from '@/components/Input';
import { TitleHeader } from '@/components/Headers';
const members = [
  {
    value: 'Property Role',
    label: 'Property Role',
  },
  {
    value: 'Manager',
    label: 'Manager',
  },
  {
    value: 'Owner',
    label: 'Owner',
  },
  {
    value: 'Company',
    label: 'Company',
  },
];
const membersInvoice = () => {
  return (
    <>
      <TitleHeader
        pageIcon="/images/accounting/coin-money.svg"
        headerText="Here you can create a private bill for your tenant or members, which
        will not be in the common bills."
      />
      <div className="bg-white p-4 rounded-lg">
        <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-4">
          <SelectInput data={members} />
          <Input name="Date" type="date" />
          <Input name="Recurring Days" type="text" />
        </div>
        <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="font-bold">Title</p>
            <Input name="Invoice Name" type="text" />
          </div>
          <div>
            <p className="font-bold">Category</p>
            <SelectInput data={members} />
          </div>
          <div>
            <p className="font-bold">Amount</p>
            <Input name="Amount" type="text" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:w-1/2 gap-4">
          <p className="text-lg font-bold">Attach Invoice</p>
          <FileUploader />
        </div>
      </div>
      <div className="bg-white mt-4">
        <GlobalDataTable
          data={membersData}
          column={membersColumn}
          tableHeader={false}
        />
      </div>
    </>
  );
};

export default membersInvoice;
