import React from 'react';
import GlobalDataTable from '@/components/GlobalDataTable';
import { membersColumn, membersData } from '@/data/TableData';
import Image from 'next/image';
import { TitleHeader } from '@/components/Headers';

const members = () => {
  return (
    <>
      <TitleHeader
        pageIcon="/images/members/members.svg"
        headerText="blablabla"
      />
      <div className="bg-white">
        <GlobalDataTable
          data={membersData}
          column={membersColumn}
          tableHeader={false}
        />
      </div>
    </>
  );
};

export default members;
