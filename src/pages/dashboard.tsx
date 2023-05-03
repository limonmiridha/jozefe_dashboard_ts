import React from 'react';
import InfoCards from '@/components/InfoCards';
import { dashboardCards } from '@/data/CardsData';

const Dashboard = () => {
  return (
    <div>
      <InfoCards cards={dashboardCards} propertySelection={true} />
    </div>
  );
};

export default Dashboard;
