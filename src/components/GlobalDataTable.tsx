import React, { useState } from 'react';
import { HiChevronRight } from 'react-icons/hi';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
// import initFilters from 'primereact/api';

//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css';

//core
import 'primereact/resources/primereact.min.css';

//icons
import 'primeicons/primeicons.css';
import Image from 'next/image';
import CurrencyBtn from './CurrencyBtn';
import CapsuleBtn from './CapsuleBtn';

const GlobalDataTable = ({
  data,
  column,
  tableTitle,
  titleImg,
  headerText,
  currencyBtn,
  capsuleBtn,
  tableHeader = true,
}: any) => {
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [rowClick, setRowClick] = useState(true);
  const [filters, setFilters] = useState({});
  const [globalFilterValue, setGlobalFilterValue] = useState('');

  // const clearFilter = (): void => {
  //   initFilters();
  // };
  const onGlobalFilterChange = (e: any) => {
    const value = e.target.value;
    let _filters: any = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="justify-betweens">
        <div className="flexs gap-3 relative">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              value={globalFilterValue}
              onChange={onGlobalFilterChange}
              placeholder="Search Entities"
              className="md:w-72"
            />
          </span>
          <button
            type="button"
            // onClick={clearFilter}
            className="absolute right-1"
          >
            <Image
              src="/images/filter.svg"
              width={42}
              height={42}
              className="bg-blue-500 p-3 rounded-md"
              alt="filter"
            />
          </button>
        </div>
        {currencyBtn && (
          <div className="absolute md:relative text-xl right-2 -top-3">
            {headerText ? (
              <>
                <h3>Total Pending</h3>
                <div className="flex gap-3 mt-3">
                  <span>0</span>
                  <CurrencyBtn />
                </div>
              </>
            ) : capsuleBtn ? null : (
              <CurrencyBtn />
            )}
          </div>
        )}
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className="bg-white py-4 mb-16 box-shadow relative">
      {tableHeader && (
        <div className="justify-betweens p-4 border-b">
          <div className="flexs gap-4">
            <Image
              src={titleImg}
              width={32}
              height={32}
              className=""
              alt="property"
            />
            <p className="font-semibold">{tableTitle}</p>
          </div>
          {capsuleBtn ? <CapsuleBtn /> : null}
        </div>
      )}

      <DataTable
        value={data}
        stripedRows
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        // selectionMode={rowClick ? null : 'checkbox'}
        selection={selectedProducts}
        onSelectionChange={(e: any) => setSelectedProducts(e.value)}
        dataKey="id"
        filters={filters}
        // globalFilterFields={[
        //   'name',
        //   'units',
        //   'representative.name',
        //   'balance',
        //   'status',
        // ]}
        header={header}
        emptyMessage="No customers found."
        tableStyle={{ minWidth: '50rem' }}
      >
        {column.map((item: any, i: any) => (
          <Column
            key={i}
            selectionMode={item.selectionMode}
            field={item.field}
            header={item.header}
            body={item.body}
            sortable={item.sort}
          ></Column>
        ))}
      </DataTable>
      <button className="absolute bottom-8 flex items-center gap-3 pl-4 hover:text-blue-600">
        See All Enteries <HiChevronRight />
      </button>
    </div>
  );
};

export default GlobalDataTable;
