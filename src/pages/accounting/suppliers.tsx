import Button from '@/components/Button';
import GlobalDataTable from '@/components/GlobalDataTable';
import { TitleHeader } from '@/components/Headers';
import { suppliersColumn, suppliersData } from '@/data/TableData';
import Link from 'next/link';
import React from 'react';

const suppliers = () => {
  return (
    <>
      <TitleHeader
        pageIcon="/images/accounting/suppliers.svg"
        headerText="Lorem Ipsum is a dummy text for placeholder"
      />
      <div className="w-40 ml-auto">
        <Link href="/accounting/new-supplier">
          <Button
            img="/images/accounting/circlePlus.svg"
            cls="bg-[#DAD7FE] hover:bg-blue-100 py-2 px-3 ml-auto"
          >
            Add Supplier
          </Button>
        </Link>
      </div>
      <div className="py-4">
        <GlobalDataTable
          column={suppliersColumn}
          data={suppliersData}
          tableTitle="Suppliers"
          titleImg="/images/accounting/tableSuppliers.svg"
        />
      </div>
    </>
  );
};

export default suppliers;
