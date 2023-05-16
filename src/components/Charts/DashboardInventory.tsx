import React from 'react';
import Card from '../GlobalCard';
import Image from 'next/image';
import inventory from '../../../public/images/charts/inventory.svg';
import BarChart from './BarChart';

const DashboardInventory = () => {
  return (
    <Card cls="bg-primary-white px-0 py-4 pb-8 shadow-none">
      <header className="flexs w-full justify-between gap-3 border-b border-b-primary-cool-grey/25 px-4 pb-2">
        <div className="flexs gap-3">
          <Image
            src={inventory}
            alt={''}
            className="h-8 w-8 rounded-full bg-red-200"
          />
          <h2>Outcome vs Income Inventory</h2>
        </div>
        <div className="text-primary-bright-blue">filter</div>
      </header>
      <div className="flexs mt-4 ml-4 justify-start gap-2">
        <span className="flexs w-16 justify-start gap-2 rounded border px-1">
          <span className="h-4 w-4 rounded bg-blue-600" /> In
        </span>
        <span className="flexs w-16 justify-start gap-2 rounded border px-1">
          <span className="h-4 w-4 rounded bg-cyan-500" /> Out
        </span>
      </div>
      <div className="mt-12 h-80 w-full">
        <BarChart
          data={[
            {
              name: 'Jan',
              in: 4000,
              out: 2400,
              value: 2400,
            },
            {
              name: 'Feb',
              in: 3000,
              out: 1398,
              value: 2210,
            },
            {
              name: 'Mar',
              in: 2000,
              out: 9800,
              value: 2290,
            },
            {
              name: 'Apr',
              in: 2780,
              out: 3908,
              value: 2000,
            },
            {
              name: 'May',
              in: 1890,
              out: 4800,
              value: 2181,
            },
          ]}
        />
      </div>
    </Card>
  );
};

export default DashboardInventory;
