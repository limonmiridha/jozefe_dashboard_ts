import Image from 'next/image';
import React, { useContext } from 'react';
import SelectInput from '@/components/SelectInput';
import FileUploader from '@/components/FileUploader';
import Card from '@/components/GlobalCard';
import { TitleHeader } from '@/components/Headers';
import Input from '@/components/Input';
import Button from '@/components/Button';

const pInvoice = () => {
  return (
    <div className="mb-16">
      <TitleHeader
        pageIcon="/images/accounting/coin-money.svg"
        headerText="Here you can create a common invoice for your property which will be
          in the common charges."
      />

      {/* Main */}
      <Card>
        <div className="grid gap-5 mt-5 xl:grid-cols-2 p-4">
          <div className="w-full">
            <p className="text-lg font-bold">Property Invoice</p>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <Input
                img="/images/accounting/debit.svg"
                name="Debit"
                type="name"
              />
              <Input name="Invoice Date" type="date" />
            </div>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <Input
                img="/images/accounting/money.svg"
                name="Price"
                type="name"
              />
              <Input
                img="/images/accounting/recruit.svg"
                name="Recurring Payment (Days)"
                type="name"
              />
            </div>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <SelectInput data={propertyInvoice} />
              <SelectInput data={propertyInvoice} />
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4">
              <div className="relative my-3">
                <span className="absolute top-2 pl-4 text-gray-600">
                  Description
                </span>
                <textarea
                  className="w-full h-32 p-4 pt-8 bg-gray-50 rounded"
                  placeholder="Type description here..."
                />
              </div>
            </div>
            <Button
              text="Create Invoice"
              img="/images/accounting/create-invoice.svg"
              cls=" bg-[#017efb] py-[8px] px-[10px] w-full h-[46] border-none text-white"
            />
          </div>
          <div>
            <p className="text-lg font-bold">Attach Invoice</p>
            <FileUploader />
          </div>
        </div>
      </Card>
      {/* Main End */}
    </div>
  );
};

export default pInvoice;
export const propertyInvoice = [
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
