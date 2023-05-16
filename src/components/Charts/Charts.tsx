import React from 'react';
import DashboardSourceType from './DashboardSourceType';
import DashboardInventory from './DashboardInventory';

const Charts = () => {
  return (
    <div className="center flex-col flex-wrap gap-4 lg:gap-2 xl:grid xl:grid-cols-6">
      <div className="w-full px-1.5 md:px-0 xl:col-span-2">
        <DashboardSourceType />
      </div>
      <div className="w-[95%] md:w-full lg:col-span-4">
        <DashboardInventory />
      </div>
    </div>
  );
};

export default Charts;
