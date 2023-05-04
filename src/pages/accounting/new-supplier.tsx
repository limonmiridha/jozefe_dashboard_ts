import React from 'react';
import { InnerHeader, TitleHeader } from '@/components/Headers';
import Input from '@/components/Input';
import Card from '@/components/GlobalCard';
import Button from '@/components/Button';

const newSupplier = () => {
  return (
    <div>
      <TitleHeader
        pageIcon="/images/accounting/suppliers.svg"
        headerText="Lorem Ipsum is a dummy text for placeholder"
      />
      <Card cls="p-4">
        <InnerHeader>Add Supplier</InnerHeader>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {newSupplierInput.map((input, i) => (
            <Input
              key={i}
              name={input.placeholder}
              cls="col-span-full "
              type="text"
            />
          ))}
        </div>
        <Button cls="bg-blue-500 px-4 py-2 text-white">Add Supplier</Button>
      </Card>
    </div>
  );
};

export default newSupplier;
const newSupplierInput = [
  { placeholder: 'Type of Company' },
  { placeholder: 'Company Name' },
  { placeholder: 'Bank Account' },
  { placeholder: 'Tax Number' },
  { placeholder: 'Address' },
  { placeholder: 'Phone' },
  { placeholder: 'Website' },
  { placeholder: 'Email' },
  { placeholder: 'Contact Person' },
  { placeholder: 'Comment' },
];
